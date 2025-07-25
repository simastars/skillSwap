const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const skillController = require('../controllers/skill.controller');
const passport = require('passport');

// @route   GET /api/skills
// @desc    Get all skills
// @access  Public
router.get('/', skillController.getSkills);

// @route   GET /api/skills/:id
// @desc    Get a skill by ID
// @access  Public
router.get('/:id', skillController.getSkillById);

// @route   POST /api/skills
// @desc    Create a new skill
// @access  Private (requires authentication)
router.post(
  '/',
  (req, res, next) => {
    console.log('POST /api/skills route hit');
    next();
  },
  passport.authenticate('jwt', { session: false }),
  [
    check('type', 'Type is required').not().isEmpty(),
    check('title', 'Title is required').not().isEmpty(),
    check('desc', 'Description is required').not().isEmpty(),
  ],
  skillController.createSkill
);

// @route   DELETE /api/skills/:id
// @desc    Delete a skill
// @access  Private (requires authentication)
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  skillController.deleteSkill
);

module.exports = router;
