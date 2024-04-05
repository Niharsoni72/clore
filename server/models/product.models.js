const mongoose = require('mongoose')

const Product = new mongoose.Schema(
    {
        product_name : {type : String, required : true},
        category_id : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'shopping_category'
        },
        sub_category_id : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'shopping_sub_category'
        },
        brand_id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'shopping_brand'
        },
        price : {
            type: Number,
            required: true,
            default: 0
        },
        small_desc : {type: String, required : true},
        long_desc : {type : String, required : true},
        image1 : {type : String},
        //image2 : {type : String, required : true},
        //image3 : {type : String, required : true},
        //image4 : {type : String, required : true},
        color : {type : String, required : true},
        qty : {
            type: Number,
            required: true,
            min: 0
        },
        size : {type : String, required : true},
        created_at : {type : Date,  default : Date.now},
        updated_at : {type : Date,  default : Date.now},
        
    }, 
    {collection : 'shopping_product'}
);

const productdb = mongoose.model('shopping_product', Product)

module.exports = productdb