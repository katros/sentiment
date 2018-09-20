const express = require('express');
const router = express.Router();
const Search = require('../../models/Search');
const Tweets = require('../../models/Tweets');
const helpers = require('../../utils/helpers.js');

//creating new search result and tweets entry

router.post('/', (req, res) => {
    const twitterParams = {
        q: req.body.query,
        count: 25,
        tweet_mode: 'extended',
        lang: 'en',
        result_type: req.body.searchType
    };

    let tweets;

    helpers
        .getTweets(twitterParams)
        .then(cleanTweets => {
            tweets = cleanTweets;

            let AwsParams = {
                LanguageCode: 'en',
                TextList: tweets
            };

            return helpers.getSentiment(AwsParams);
        })
        .then(sentimentResult => {
            let statistics = {
                sentiment: '',
                positive: 0,
                negative: 0,
                neutral: 0,
                mixed: 0,
                details: []
            };

            sentimentResult.ResultList.forEach(result => {
                if (result.Sentiment === 'POSITIVE') statistics.positive++;
                else if (result.Sentiment === 'NEGATIVE') statistics.negative++;
                else if (result.Sentiment === 'NEUTRAL') statistics.neutral++;
                else statistics.mixed++;

                statistics.details.push({
                    text: tweets[result.Index],
                    sentiment: result.Sentiment,
                    positive: result.SentimentScore.Positive,
                    negative: result.SentimentScore.Negative,
                    neutral: result.SentimentScore.Neutral,
                    mixed: result.SentimentScore.Mixed
                });
            });

            let copy = Object.assign({}, statistics);
            delete copy.details;

            let sentiment = Object.keys(copy).reduce((a, b) => (copy[a] > copy[b] ? a : b));
            statistics.sentiment = sentiment;

            return statistics;
        })
        .then(statistics => {
            let search = new Search({
                userId: req.user._id,
                query: req.body.query,
                searchType: req.body.searchType,
                sentiment: statistics.sentiment,
                positiveTweets: statistics.positive,
                negativeTweets: statistics.negative,
                neutralTweets: statistics.neutral,
                mixedTweets: statistics.mixed
            })
                .save()
                .then(search => {
                    res.send(search);
                    let tweets = new Tweets({
                        searchId: search._id,
                        tweets: statistics.details
                    }).save();
                });
        })
        .catch(err => {
            console.error(err);
        });
});

////////////////////////////////////////////////////////////////////////////
//other routes
///////////////////////////////////////////////////////////////////////////

//getting search result by its id

// router.get('/:id', (req, res) => {
//     const id = req.params._id;

//     Search.findOne({ id }).then(result => {
//         res.send(result);
//     });
// });

//getting all search results of a user

router.get('/', (req, res) => {
    const userId = req.user._id;

    Search.find({ userId }).then(result => {
        res.send(result);
    });
});

//deleting specific search result

router.post('/:id/delete', (req, res) => {
    Search.findByIdAndRemove(req.params.id).then(result => {
        res.send(result);
    });
});

//getting detailed search information

router.get('/tweets/:searchId', (req, res) => {
    const searchId = req.params.searchId;

    Tweets.find({ searchId }).then(result => {
        res.send(result);
    });
});

module.exports = router;
