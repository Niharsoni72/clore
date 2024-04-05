const mongoose = require('mongoose')

const Order = new mongoose.Schema(
    {
        user_id : {type : mongoose.Schema.Types.ObjectId, ref : 'auth_users'},
        address_id : {type : mongoose.Schema.Types.ObjectId, ref : 'user_addresses' },
        payment_status : {type : String, required : true},
        payment_mode : {type : String, required : true},
        created_at : {type : Date, default : Date.now},
        updated_at : {type : Date, default : Date.now}
    }, 
    {collection : 'shopping_order'}
);

const orderdb = mongoose.model('shopping_order', Order)

module.exports = orderdb