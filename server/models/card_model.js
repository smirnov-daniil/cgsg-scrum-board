const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    id: { type: String, unique: true, required: true },
    colId: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    status: { type: String, default: '' },
});

module.exports = mongoose.model('Card', cardSchema);