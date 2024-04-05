const mongoose = require('mongoose')

const Brand = new mongoose.Schema(
    {
        brand_name : {type : String, required : true},
        image_path : {type : String},
        created_at : {type : Date, default : Date.now},
        updated_at : {type : Date, default : Date.now},
    }, 
    {collection : 'shopping_brand'}
);

const branddb = mongoose.model('shopping_brand', Brand)

module.exports = branddb