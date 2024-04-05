const mongoose = require('mongoose')

const Address = new mongoose.Schema(
    {
        user_id : {type : mongoose.Schema.Types.ObjectId, ref : 'auth_users'},
        phone : {type : String, required : true, maxLength : 10 },
        street : {type : String, required : true},
        city : {type : String,  required : true},
        state : {type : String,  required : true},
        pincode : {type : Number, required : true, maxLength : 6},
        created_at : {type : Date, default : Date.now},
        updated_at : {type : Date, default : Date.now}
    }, 
    {collection : 'user_addresses'}
);

const addressdb = mongoose.model('user_addresses', Address)

module.exports = addressdb