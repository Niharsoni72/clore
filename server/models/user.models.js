const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        first_name : {type : String, required : true},
        last_name : {type : String, required : true},
        phone : {type: String, required : true, maxLength : 10},
        email : {type : String, required : true, unique : true},
        password : {type : String, required : true},
        street : {type : String, default : null},
        city : {type : String, default : null},
        state : {type : String, default : null},
        tokens :[{
            token :{
                type : String,
                required : true,
            }
        }],
        pincode : {type : Number, maxLength: 6},
        created_at : {type : Date, required : true},
        updated_at : {type : Date, required : true},
        quote : {type : String},
    }, 
    {collection : 'auth_users'}
);

const userdb = mongoose.model('auth_users', User)

module.exports = userdb