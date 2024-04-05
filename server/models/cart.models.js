const mongoose = require('mongoose')

const Cart = new mongoose.Schema(
    {
        product_id : {type : mongoose.Schema.Types.ObjectId, ref : 'shopping_product'},
        user_id : {type : mongoose.Schema.Types.ObjectId, ref : 'auth_users'},
        qty : {type : Number, required : true, default : 1 },
        total_amount : {type : Number, required : true},
        created_at : {type : Date,  default : Date.now},
        updated_at : {type : Date,  default : Date.now}
    }, 
    {collection : 'shopping_cart'}
);

const cartdb = mongoose.model('shopping_cart', Cart)

module.exports = cartdb