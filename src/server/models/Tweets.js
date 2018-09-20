const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetsSchema = new Schema({
    searchId: { type: Schema.Types.ObjectId, ref: 'Search' },
    tweets: [
        {
            text: String,
            sentiment: String,
            positive: Number,
            negative: Number,
            neutral: Number,
            mixed: Number
        }
    ]
});

module.exports = mongoose.model('Tweets', tweetsSchema);
