const mongoose = require('mongoose')

const FinalOrder = new mongoose.Schema(
    {
        user_id : {type : mongoose.Schema.Types.ObjectId, ref : 'auth_users'},
        order_id : {type : mongoose.Schema.Types.ObjectId, ref : 'shopping_order'},
        product_id : {type : mongoose.Schema.Types.ObjectId, ref : 'shopping_product' },
        quantity : {type : Number, required : true},
        total : {type : Number, required : true},
        created_at : {type : Date, default : Date.now},
        updated_at : {type : Date, default : Date.now}
    }, 
    {collection : 'shopping_final_order'}
);

const finalorderdb = mongoose.model('shopping_final_order', FinalOrder)

module.exports = finalorderdb