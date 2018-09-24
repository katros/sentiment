import React, { Component } from 'react';
import api from './utils/api';
import Card from './Card';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            searchResults: []
        };
    }

    componentDidMount() {
        this._getAllCards();
    }

    render() {
        const mappedTweet = this.state.searchResults.map(el => (
            <Card tweet={el} key={el._id} getAllCards={this._getAllCards} />
        ));

        return <div>{mappedTweet}</div>;
    }

    _getAllCards = () => {
        api.get('/api/search').then(
            result => {
                this.setState({
                    isLoaded: true,
                    searchResults: result
                });
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    };
}

export default Details;
