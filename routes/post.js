const express = require('express');
const { getPosts,createUser, deleteUser, updateUser } = require('../controllers/post');
const validator = require('../validator');

const router = express.Router();

router.get("/", getPosts);
router.post("/create-user",validator.createUserValidator, createUser);
router.delete("/delete-user", deleteUser);
router.put("/update-user", updateUser);

module.exports = router;