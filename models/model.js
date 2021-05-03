const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    cakeName: {
        type: String,
        required: true,
    },
    cakeFlavor: {
        type: String,
        required: true,
    },
    cakeTopping: {
        type: String,
        required: true,
    },
    cakeFilling: {
        type: String,
        required: true,
    },
    cakePrice: {
        type: Number,
        required: true,
    },
});


module.exports = mongoose.model('teams', teamSchema);