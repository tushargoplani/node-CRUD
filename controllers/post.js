const User = require('../models/post');

exports.getPosts = async (req, res) => {
    const users = await User.find().select("_id name city contact company")
        .then((users) => {
            res.json({ total: users.length, users });
        })
        .catch(err => console.log(err))
}

exports.createUser = async (req, res) => {
    const post = await new User(req.body)
    console.log("Creating User: ", req.body);
    post.save().then(result => {
        res.json({
            post: result
        });
    });
};

exports.deleteUser = async (req,res) => {
    User.deleteOne({name : req.body.name}, (err,result) => {
        if(err) 
            throw err
        res.send('User is deleted.')
    })
}

exports.updateUser = async (req,res) => {
    try {
        await User.updateOne({name: req.body.oldname}, {$set: {name:req.body.name, city:req.body.city, contact:req.body.contact, company:req.body.company}});
        res.send("User Updated Successfully!");
    } 
    catch (error) {
        res.send(error);
    }
}