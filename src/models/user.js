const{mongoose} = require('../config/db');

let userschema={ 
                name: String,
                surname:{
                   type:String,
                   required:true
                }, 
                adress:String,
                email:String,
                mobileno:String,
                password_hash:String,
                role:String

                }
const User = mongoose.model('User',userschema );

exports.User=User;