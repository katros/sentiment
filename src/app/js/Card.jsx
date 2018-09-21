import React from 'react';
import Moment from 'react-moment';

const Card = ({ tweet }) => {
    return (
        <div className="card">
            <p>query: {tweet.query}</p>
            <p>search type: {tweet.searchType}</p>
            <p>sentiment: {tweet.sentiment}</p>
            <p>details: </p>
            <p>{tweet.positiveTweets * 4}% positive,</p>
            <p>{tweet.negativeTweets * 4}% negative,</p>
            <p>{tweet.neutralTweets * 4}% neutral,</p>
            <p>{tweet.mixedTweets * 4}% mixed</p>
            <p>
                date: <Moment format="DD/MM/YYYY, HH:mm">{tweet.created_at}</Moment>
            </p>
            <button>details</button>
            <button>delete</button>
        </div>
    );
};

export default Card;
