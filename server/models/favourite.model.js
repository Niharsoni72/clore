const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model and 'User' is the name of that model
    required: true
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product' // Assuming you have a Product model and 'Product' is the name of that model
  }]
});

const Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;
