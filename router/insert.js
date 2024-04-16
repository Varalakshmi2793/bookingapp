const express=require('express');
const user=require('../controller/usercontroller');
const router=express.Router();

router.post('/user', user.createUser);
router.get('/user', user.getAllUser );
router.delete('/user/:id', user.deleteUser );

module.exports = router;

