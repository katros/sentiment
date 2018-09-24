import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import api from './utils/api';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.tweet._id,
            error: ''
        };

        this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
        const data = this.props.tweet;
        return (
            <div className="card">
                <p>query: {data.query}</p>
                <p>search type: {data.searchType}</p>
                <p>sentiment: {data.sentiment}</p>
                <p>details: </p>
                <p>{data.positiveTweets * 4}% positive,</p>
                <p>{data.negativeTweets * 4}% negative,</p>
                <p>{data.neutralTweets * 4}% neutral,</p>
                <p>{data.mixedTweets * 4}% mixed</p>
                <p>
                    date: <Moment format="DD/MM/YYYY, HH:mm">{data.created_at}</Moment>
                </p>
                <Link to={'/tweets/' + data._id}>details</Link>
                <form onSubmit={this._handleSubmit}>
                    <input type="submit" value="Delete" />
                </form>
            </div>
        );
    }

    _handleSubmit(event) {
        event.preventDefault();

        api.del('/api/search/' + this.state.id)
            .then(data => {
                console.log(this.props.getAllCards);
                this.props.getAllCards();
            })
            .catch(err => {
                this.setState({
                    error: err.description
                });
            });
    }
}

export default Card;
