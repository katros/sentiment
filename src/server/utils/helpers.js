const Twit = require('twit');
const AWS = require('aws-sdk');
const config = require('../config.js');

//Twitter API configuration
const TwitterAPI = new Twit({
    consumer_key: config.TWITTER_CONSUMER_KEY,
    consumer_secret: config.TWITTER_CONSUMER_SECRET,
    access_token: config.TWITTER_ACCESS_TOKEN,
    access_token_secret: config.TWITTER_ACCESS_SECRET,
    timeout_ms: 60 * 1000
});

//AWS API configuration
AWS.config.update({
    region: 'eu-west-1',
    credentials: {
        accessKeyId: config.AWS_ACCESS_KEY_ID,
        secretAccessKey: config.AWS_SECRET_ACCESS_KEY
    }
});
const comprehend = new AWS.Comprehend();

function getTweets(params) {
    return new Promise((resolve, reject) => {
        TwitterAPI.get('search/tweets', params, (err, data, response) => {
            let tweetsText = data.statuses.map(tweet => {
                return (tweet.retweeted_status ? tweet.retweeted_status.full_text : tweet.full_text)
                    .replace(/\n/g, ' ')
                    .replace(/  +/g, ' ')
                    .replace(/'/g, '');
            });

            resolve(tweetsText);
        });
    });
}

function getSentiment(params) {
    return new Promise((resolve, reject) => {
        comprehend.batchDetectSentiment(params, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

module.exports = {
    getTweets,
    getSentiment
};
