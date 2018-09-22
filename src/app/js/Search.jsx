import React from 'react';
import api from './utils/api';
import Result from './Result';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            error: '',
            searchType: 'recent',
            data: null
        };

        this._handleInputChange = this._handleInputChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
        const { value } = this.state;
        return (
            <div className="container">
                <h1>Search</h1>
                <form onSubmit={this._handleSubmit}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            onChange={evt => this._handleInputChange('value', evt.target.value)}
                            className="searchInput"
                            placeholder="Search"
                            value={value}
                        />
                        <span className="input-highlight">{value.replace(/ /g, '\u00a0')}</span>
                    </div>
                    <div>
                        Search type:
                        <br />
                        <label>
                            <input
                                type="radio"
                                value="recent"
                                checked={this.state.searchType === 'recent'}
                                onChange={evt => this._handleInputChange('searchType', evt.target.value)}
                            />
                            recent
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                value="popular"
                                checked={this.state.searchType === 'popular'}
                                onChange={evt => this._handleInputChange('searchType', evt.target.value)}
                            />
                            popular (returns 15 results)
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                value="mixed"
                                checked={this.state.searchType === 'mixed'}
                                onChange={evt => this._handleInputChange('searchType', evt.target.value)}
                            />
                            mixed
                        </label>
                        <br />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
                <Result data={this.state.data} />
            </div>
        );
    }

    _handleInputChange(key, newValue) {
        this.setState({
            [key]: newValue
        });
    }

    _handleSubmit(event) {
        event.preventDefault();

        api.post('/api/search', { query: this.state.value, searchType: this.state.searchType })
            .then(data => {
                this.setState({
                    data: data
                });
            })
            .catch(err => {
                this.setState({
                    error: err.description
                });
            });
    }
}

export default Search;
