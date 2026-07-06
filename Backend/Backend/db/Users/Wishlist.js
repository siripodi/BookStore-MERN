const mongoose = require('mongoose');

const wishlistItemSchema = new mongoose.Schema({
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    userName: String,

    title: String,
    author: String,
    genre: String,
    price: Number,

    image: String,
    itemImage: String,
});

module.exports = mongoose.model('WishlistItem', wishlistItemSchema);