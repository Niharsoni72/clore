const mongoose = require('mongoose')

const SubCategory = new mongoose.Schema(
    {
        sub_category_name : {type : String, required : true},
        category_id : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : 'shopping_category'
        },
        created_at : {type : Date, default : Date.now},
        updated_at : {type : Date, default : Date.now},
    }, 
    {collection : 'shopping_sub_category'}
);

const subcategorydb = mongoose.model('shopping_sub_category', SubCategory)

module.exports = subcategorydb