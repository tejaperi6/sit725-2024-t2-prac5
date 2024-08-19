const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    movieSuggestion: { type: String, required: true },
    email: { type: String, required: true },
    numberOfSeats: { type: Number, required: true }
});

const Movies = mongoose.model('Movies', contactSchema);
module.exports = Movies