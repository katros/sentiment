// import api from './utils/api';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';

class Result extends Component {
    render() {
        const data = this.props.data;
        if (!data) return null;
        return (
            <div className="result-container">
                <h2>Sentiment analysis for: {data.query}</h2>
                <Chart data={data} key={data._id} />
                <h3>The overal sentiment about your query is {data.sentiment}.</h3>
                <div className="search-result">
                    {data.searchType === 'popular' ? (
                        <p>{Math.round((data.positiveTweets * 100) / 15)}</p>
                    ) : (
                        <p>{data.positiveTweets * 4}</p>
                    )}
                    <p>% of tweets were classified as positive.</p>
                </div>
                <div className="search-result">
                    {data.searchType === 'popular' ? (
                        <p>{Math.round((data.negativeTweets * 100) / 15)}</p>
                    ) : (
                        <p>{data.negativeTweets * 4}</p>
                    )}
                    <p>% of tweets were classified as negative.</p>
                </div>
                <div className="search-result">
                    {data.searchType === 'popular' ? (
                        <p>{Math.round((data.neutralTweets * 100) / 15)}</p>
                    ) : (
                        <p>{data.neutralTweets * 4}</p>
                    )}
                    <p>% of tweets were classified as neutral.</p>
                </div>
                <div className="search-result">
                    {data.searchType === 'popular' ? (
                        <p>{Math.round((data.mixedTweets * 100) / 15)}</p>
                    ) : (
                        <p>{data.mixedTweets * 4}</p>
                    )}
                    <p>% of tweets were classified as mixed.</p>
                </div>
                <h4>
                    If you want to know more details about this search, check your
                    <Link to="/profile"> profile</Link>.
                </h4>
            </div>
        );
    }
}

export default Result;
