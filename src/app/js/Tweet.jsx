import React from 'react';
import Linkify from 'react-linkify';

const Tweet = ({ tweetDetails }) => {
    return (
        <div className="card">
            <Linkify properties={{ target: '_blank', style: { color: 'red', fontWeight: 'bold' } }}>
                <p>text: {tweetDetails.text}</p>
            </Linkify>
            <p>sentiment: {tweetDetails.sentiment}</p>
            <p>positive: {Math.round(tweetDetails.positive * 100)}%</p>
            <p>negative: {Math.round(tweetDetails.negative * 100)}%</p>
            <p>neutral: {Math.round(tweetDetails.neutral * 100)}%</p>
            <p>mixed: {Math.round(tweetDetails.mixed * 100)}%</p>
        </div>
    );
};

export default Tweet;
