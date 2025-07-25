const Skill = require('../models/Skill.model');
const { validationResult } = require('express-validator');

// @desc    Get all skills (with pagination and search)
exports.getSkills = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";

    const query = search
      ? {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { desc: { $regex: search, $options: "i" } },
            { type: { $regex: search, $options: "i" } }
          ]
        }
      : {};

    const total = await Skill.countDocuments(query);
    const totalPages = Math.ceil(total / limit) || 1;
    const skills = await Skill.find(query)
      .populate('user', 'firstName email')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ skills, totalPages });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
    next();
};

// @desc    Create a new skill
exports.createSkill = async (req, res, next) => {
  console.log('REQ BODY:', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { type, title, desc, img } = req.body;
    console.log('Creating skill:', { type, title, desc, img });
    const skill = new Skill({
      user: req.user.id,
      type,
      title,
      desc,
      img
    });
    await skill.save();
    res.status(201).json(skill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
  next();
};

const mongoose = require('mongoose');
// @desc    Get a single skill by ID
exports.getSkillById = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: 'Invalid skill ID' });
    }
    const skill = await Skill.findById(req.params.id).populate('user', 'firstName email');
    if (!skill) return res.status(404).json({ msg: 'Skill not found' });
    res.json(skill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Delete a skill by ID
exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ msg: 'Skill not found' });
    // Only allow owner to delete
    // console.log('Skill user:', skill.user.toString(), 'Req user:', req.user.id.toString());
    if (skill.user.toString() !== req.user.id.toString()) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    await skill.deleteOne();
    res.json({ msg: 'Skill removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
