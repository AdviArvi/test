const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
  

  const userSchema = new mongoose.Schema({
    name:  String, 
    age: Number,
    city: String,
    state: String,
    }
  );
 const model=mongoose.model('Store',userSchema);
//  console.log(model)
  module.exports=model

