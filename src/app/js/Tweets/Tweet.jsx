import React from 'react';
import Linkify from 'react-linkify';

const Tweet = ({ tweetDetails }) => {
    return (
        <div className="tweet-card">
            <Linkify properties={{ target: '_blank', style: { color: '#86A9CC' } }}>
                <p className="txt-bolder">tweet: </p>
                {tweetDetails.text}
            </Linkify>

            <div className="tweet-details">
                <p className="txt-bolder"> sentiment: </p>
                {tweetDetails.sentiment === 'NEUTRAL' ? (
                    <p style={{ color: '#A4BBC8' }} className="txt-bolder">
                        {tweetDetails.sentiment}
                    </p>
                ) : null}

                {tweetDetails.sentiment === 'POSITIVE' ? (
                    <p style={{ color: '#E19C9B' }} className="txt-bolder">
                        {tweetDetails.sentiment}
                    </p>
                ) : null}

                {tweetDetails.sentiment === 'NEGATIVE' ? (
                    <p style={{ color: '#455B71' }} className="txt-bolder">
                        {tweetDetails.sentiment}
                    </p>
                ) : null}

                {tweetDetails.sentiment === 'MIXED' ? (
                    <p style={{ color: '#FCD5BB' }} className="txt-bolder">
                        {tweetDetails.sentiment}
                    </p>
                ) : null}

                <p className="txt-bolder txt-padding">confidence: </p>
                <p>positive: {(tweetDetails.positive * 100).toFixed(2)}%</p>
                <p>negative: {(tweetDetails.negative * 100).toFixed(2)}%</p>
                <p>neutral: {(tweetDetails.neutral * 100).toFixed(2)}%</p>
                <p>mixed: {(tweetDetails.mixed * 100).toFixed(2)}%</p>
            </div>
        </div>
    );
};

export default Tweet;
