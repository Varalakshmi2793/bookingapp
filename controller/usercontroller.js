const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
       
        const username=req.body.username;
        const email =req.body.email;
        const phonenumber = req.body.phonenumber;
        const userdetails = await User.create({ 
          
            username:username,
            email:email,
            phonenumber: phonenumber });
     
        res.status(201).json({ message: 'User created successfully', user: userdetails });
     
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

exports.getAllUser = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        await user.destroy();
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete user' });
    }
};
