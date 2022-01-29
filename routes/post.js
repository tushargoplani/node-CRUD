const express = require('express');
const { getPosts,createUser, deleteUser, updateUser } = require('../controllers/post');
const validator = require('../validator');

const router = express.Router();

router.get("/", getPosts);
router.post("/",validator.createUserValidator, createUser);
router.delete("/", deleteUser);
router.put("/", updateUser);

module.exports = router;