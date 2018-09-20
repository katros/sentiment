const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        query: String,
        searchType: String,
        sentiment: String,
        positiveTweets: Number,
        negativeTweets: Number,
        neutralTweets: Number,
        mixedTweets: Number
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

module.exports = mongoose.model('Search', searchSchema);
