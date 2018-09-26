import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DoughnutChart from './DoughnutChart';

class Result extends Component {
    render() {
        const data = this.props.data;
        let amount;

        if (!data && !this.props.loading) return null;

        if (this.props.loading)
            return (
                <div style={{ minHeight: '100vh' }} className="loading">
                    <div className="spinner-eff spinner-eff-1">
                        <div className="bar bar-top" />
                        <div className="bar bar-right" />
                        <div className="bar bar-bottom" />
                        <div className="bar bar-left" />
                    </div>
                </div>
            );

        if (data)
            amount = data.positiveTweets + data.negativeTweets + data.neutralTweets + data.mixedTweets;

        return (
            <div className="result-container">
                <h2>Sentiment analysis for: {data.query}</h2>
                <DoughnutChart data={data} key={data._id} />
                <h3>The overal sentiment about your query is {data.sentiment}.</h3>
                <div className="search-result">
                    {((data.positiveTweets * 100) / amount).toFixed(2) === '0.00' ? (
                        <p>0</p>
                    ) : (
                        ((data.positiveTweets * 100) / amount).toFixed(2)
                    )}
                    <p>% of tweets were classified as positive.</p>
                </div>
                <div className="search-result">
                    {((data.negativeTweets * 100) / amount).toFixed(2) === '0.00' ? (
                        <p>0</p>
                    ) : (
                        ((data.negativeTweets * 100) / amount).toFixed(2)
                    )}
                    <p>% of tweets were classified as negative.</p>
                </div>
                <div className="search-result">
                    {((data.neutralTweets * 100) / amount).toFixed(2) === '0.00' ? (
                        <p>0</p>
                    ) : (
                        ((data.neutralTweets * 100) / amount).toFixed(2)
                    )}
                    <p>% of tweets were classified as neutral.</p>
                </div>
                <div className="search-result">
                    {((data.mixedTweets * 100) / amount).toFixed(2) === '0.00' ? (
                        <p>0</p>
                    ) : (
                        ((data.mixedTweets * 100) / amount).toFixed(2)
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
