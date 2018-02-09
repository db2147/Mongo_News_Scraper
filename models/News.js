const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    title: {
        type: String,
        required: false
    },

    summary: {
        type: String,
        required: false
    },

    link: {
        type: String,
        required: false
    },
    saved: {
        type: String,
        required: false,
        default: false
    }
});

const News = mongoose.model('News', NewsSchema);

module.exports = News;
