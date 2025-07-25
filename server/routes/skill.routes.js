const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
// Multer setup for file uploads
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });
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
  passport.authenticate('jwt', { session: false }),
  upload.single('img'),
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
