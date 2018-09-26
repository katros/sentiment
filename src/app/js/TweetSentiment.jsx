import React, { Component } from 'react';
import api from './utils/api';
import Tweet from './Tweet';
import { Link } from 'react-router-dom';
import Icons from '../assets/images/sprite.svg';

class TweetSentiment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            tweets: []
        };
    }

    componentDidMount() {
        api.get('/api/search/tweets/' + this.props.id).then(
            result => {
                console.log('result=', result);
                this.setState({
                    isLoaded: true,
                    tweets: result
                });
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }

    render() {
        const mappedSentiment = this.state.tweets.map(el => <Tweet tweetDetails={el} key={el._id} />);

        return (
            <div className="container">
                <Link to={'/profile'}>
                <svg className="icon__edit arrow">
                        <use xlinkHref={`${Icons}#left-arrow`} />
                    </svg>
                </Link>
                <div>{mappedSentiment}</div>
            </div>
        );
    }
}

export default TweetSentiment;
