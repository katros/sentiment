import React, { Component } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import api from './utils/api';
import Icons from '../assets/images/sprite.svg';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.tweet._id,
            error: ''
        };

        this._handleSubmit = this._handleDelete.bind(this);
    }

    render() {
        const data = this.props.tweet;
        let amount = data.positiveTweets + data.negativeTweets + data.neutralTweets + data.mixedTweets;
        return (
            <div className="card">
                <p className="txt-bolder"> query: </p>
                {data.query}
                <p className="txt-bolder">search type: </p>
                {data.searchType}
                <p className="txt-bolder">sentiment: </p>
                {data.sentiment}
                <p className="txt-bolder">details: </p>
                <p>{Math.round((data.positiveTweets * 100) / amount)}% positive,</p>
                <p>{Math.round((data.negativeTweets * 100) / amount)}% negative,</p>
                <p>{Math.round((data.neutralTweets * 100) / amount)}% neutral,</p>
                <p>{Math.round((data.mixedTweets * 100) / amount)}% mixed</p>
                <p className="txt-bolder">date:</p>
                <Moment format="DD/MM/YYYY, HH:mm">{data.created_at}</Moment>
                <Link to={'/tweets/' + data._id}>
                    <svg className="icon__edit">
                        <use xlinkHref={`${Icons}#view-details`} />
                    </svg>
                </Link>

                <div onClick={() => this._handleDelete(event)}>
                    <svg className="icon__edit">
                        <use xlinkHref={`${Icons}#trash`} />
                    </svg>
                </div>
            </div>
        );
    }

    _handleDelete(event) {
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
