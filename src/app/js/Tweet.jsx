import React from 'react';

const Tweet = ({ tweetDetails }) => {
    return (
        <div className="card">
            <p>text: {tweetDetails.text}</p>
            <p>sentiment: {tweetDetails.sentiment}</p>
            <p>positive: {tweetDetails.positive}</p>
            <p>negative: {tweetDetails.negative}</p>
            <p>neutral: {tweetDetails.neutral}</p>
            <p>mixed: {tweetDetails.mixed}</p>
        </div>
    );
};

export default Tweet;
