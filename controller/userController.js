exports.hello=(req,res)=>{
    console.log(req.name);
    res.render('index');
    };

const mongoose=require('mongoose');

