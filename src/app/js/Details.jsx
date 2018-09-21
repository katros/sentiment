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
        api.get('/api/search')
            // .then(res => res.json())
            .then(
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
    }

    render() {
        console.log(this.state.searchResults);

        const mappedTweet = this.state.searchResults.map(el => <Card tweet={el} key={el._id} />);

        return <div>{mappedTweet}</div>;
    }
}

export default Details;
