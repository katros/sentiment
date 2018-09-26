import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DoughnutChart from './DoughnutChart';

class Result extends Component {
    render() {
        const data = this.props.data;
        if (!data && !this.props.loading) return null;

        if (this.props.loading) return <div style={{ minHeight: '100vh' }}>
        


<svg width="300" height="120" id="clackers" className="loading">

  <svg className="loading">
    <path id="arc-left-up" fill="none" d="M 90 90 A 90 90 0 0 1 0 0"/>
  </svg>

  <svg className="loading">
    <path id="arc-right-up" fill="none" d="M 100 90 A 90 90 0 0 0 190 0"/>
  </svg>
  
  <circle cx="15" cy="15" r="15">
  
    <animateMotion dur="1.5s" repeatCount="indefinite"
      calcMode="linear"
      keyPoints="0.0;0.19;0.36;0.51;0.64;0.75;0.84;0.91;0.96;0.99;1.0;0.99;0.96;0.91;0.84;0.75;0.64;0.51;0.36;0.19;0.0;0.0;0.05;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0"
      keyTimes="0.0;0.025;0.05;0.075;0.1;0.125;0.15;0.175;0.2;0.225;0.25;0.275;0.3;0.325;0.35;0.375;0.4;0.425;0.45;0.475;0.5;0.525;0.55;0.575;0.6;0.625;0.65;0.675;0.7;0.725;0.75;0.775;0.8;0.825;0.85;0.875;0.9;0.925;0.95;0.975;1.0">
      <mpath xlinkHref="#arc-left-up"/>
    </animateMotion>
  </circle>
  <circle cx="135" cy="105" r="15" />
  <circle cx="165" cy="105" r="15" />
  <circle cx="95" cy="15" r="15">
    <animateMotion dur="1.5s" repeatCount="indefinite"
      calcMode="linear"
      keyPoints="0.0;0.0;0.05;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.0;0.19;0.36;0.51;0.64;0.75;0.84;0.91;0.96;0.99;1.0;0.99;0.96;0.91;0.84;0.75;0.64;0.51;0.36;0.19;0.0"
      keyTimes="0.0;0.025;0.05;0.075;0.1;0.125;0.15;0.175;0.2;0.225;0.25;0.275;0.3;0.325;0.35;0.375;0.4;0.425;0.45;0.475;0.5;0.525;0.55;0.575;0.6;0.625;0.65;0.675;0.7;0.725;0.75;0.775;0.8;0.825;0.85;0.875;0.9;0.925;0.95;0.975;1.0">
      <mpath xlinkHref="#arc-right-up"/>
    </animateMotion>
  </circle>
</svg>




        </div>;

        return (
            <div className="result-container">
                <h2>Sentiment analysis for: {data.query}</h2>
                <DoughnutChart data={data} key={data._id} />
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
