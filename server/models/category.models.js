const mongoose = require('mongoose')

const Category = new mongoose.Schema(
    {
        category_name : {type : String},
        created_at : {type : Date, default : Date.now},
        updated_at : {type : Date, default : Date.now},
    }, 
    {collection : 'shopping_category'}
);

const categorydb = mongoose.model('shopping_category', Category)

module.exports = categorydb