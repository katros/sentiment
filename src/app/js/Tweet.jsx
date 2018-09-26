import React from 'react';
import Linkify from 'react-linkify';

const Tweet = ({ tweetDetails }) => {
    return (
        <div className="tweet-card">
            
            <Linkify properties={{ target: '_blank', style: { color: '#86A9CC' } }}>
                    <p className="txt-bolder">tweet: </p>{tweetDetails.text}
            </Linkify>
           
         
            <div className="tweet-details">
                <p className="txt-bolder"> sentiment: </p>{tweetDetails.sentiment}
                <p className="txt-bolder txt-padding">certainity: </p>
                <p>positive: {Math.round(tweetDetails.positive * 100)}%</p>
                <p>negative: {Math.round(tweetDetails.negative * 100)}%</p>
                <p>neutral: {Math.round(tweetDetails.neutral * 100)}%</p>
                <p>mixed: {Math.round(tweetDetails.mixed * 100)}%</p>
            </div>
        </div>
    );
};

export default Tweet;
