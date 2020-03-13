const express=require('express');
const router=express.Router();
const userController=require('../controller/userController');

// router.get('/',(req,res)=>{
//     res.render('hello');
// });
router.get('/',userController.hello);
// router.get('/users',userController.users);
// router.get('/admin',userController.admin);
// router.get('/admin',userController);

module.exports=router;
