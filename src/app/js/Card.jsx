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
        console.log(data);
        return (
            <div className="card">
                <p className="txt-bolder"> query: </p>
                {data.query}
                <p className="txt-bolder">search type: </p>
                {data.searchType}
                <p className="txt-bolder">sentiment: </p>
                {data.sentiment}
                <p className="txt-bolder">details: </p>

                {data.searchType === 'popular' ? (
                    <p>{Math.round((data.positiveTweets * 100) / 15)}% positive,</p>
                ) : (
                    <p>{data.positiveTweets * 4}% positive,</p>
                )}

                {data.searchType === 'popular' ? (
                    <p>{Math.round((data.negativeTweets * 100) / 15)}% negative,</p>
                ) : (
                    <p>{data.negativeTweets * 4}% negative,</p>
                )}

                {data.searchType === 'popular' ? (
                    <p>{Math.round((data.neutralTweets * 100) / 15)}% neutral,</p>
                ) : (
                    <p>{data.neutralTweets * 4}% neutral,</p>
                )}

                {data.searchType === 'popular' ? (
                    <p>{Math.round((data.mixedTweets * 100) / 15)}% mixed</p>
                ) : (
                    <p>{data.mixedTweets * 4}% mixed</p>
                )}

                <p className="txt-bolder">date:</p>
                <Moment format="DD/MM/YYYY, HH:mm">{data.created_at}</Moment>
                <Link to={'/tweets/' + data._id} className="button btn-details">
                    details
                </Link>
                <form onSubmit={this._handleSubmit} className="button btn-delete">
                    <input type="submit" value="delete" />
                </form>
            </div>
        );
    }

    _handleSubmit(event) {
        event.preventDefault();

        api.del('/api/search/' + this.state.id)
            .then(data => {
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
