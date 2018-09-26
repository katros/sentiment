import scrollToComponent from 'react-scroll-to-component';
import React from 'react';
import api from './utils/api';
import Result from './Result';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.state = {
            value: '',
            error: '',
            searchType: 'recent',
            data: null,
            loading: false
        };

        this._handleInputChange = this._handleInputChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
        const { value } = this.state;
        return (
            <div className="form-container">
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
                    <div className="cntr">
                        Search type:
                        <br />
                        <label className="btn-radio">
                            <input
                                type="radio"
                                value="recent"
                                checked={this.state.searchType === 'recent'}
                                onChange={evt => this._handleInputChange('searchType', evt.target.value)}
                            />
                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="9" />
                                <path
                                    d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                                    className="inner"
                                />
                                <path
                                    d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                                    className="outer"
                                />
                            </svg>
                            <span>recent</span>
                        </label>
                        <br />
                        <label className="btn-radio">
                            <input
                                type="radio"
                                value="popular"
                                checked={this.state.searchType === 'popular'}
                                onChange={evt => this._handleInputChange('searchType', evt.target.value)}
                            />
                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="9" />
                                <path
                                    d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                                    className="inner"
                                />
                                <path
                                    d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                                    className="outer"
                                />
                            </svg>
                            <span>popular</span>
                        </label>
                        <br />
                        <label className="btn-radio">
                            <input
                                type="radio"
                                value="mixed"
                                checked={this.state.searchType === 'mixed'}
                                onChange={evt => this._handleInputChange('searchType', evt.target.value)}
                            />
                            <svg width="20px" height="20px" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="9" />
                                <path
                                    d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                                    className="inner"
                                />
                                <path
                                    d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                                    className="outer"
                                />
                            </svg>
                            <span>mixed</span>
                        </label>
                        <br />
                    </div>
                    <div className="button-wrapper">
                        <input
                            type="submit"
                            disabled={!this.state.value}
                            value="Submit"
                            className="button btn-submit"
                        />
                    </div>
                </form>
                <Result data={this.state.data} loading={this.state.loading} ref={this.myRef} />
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

        this.setState(
            {
                loading: true
            },
            () => {
                scrollToComponent(this.myRef.current, {
                    offset: 0,
                    align: 'top',
                    duration: 800
                });
            }
        );

        api.post('/api/search', { query: this.state.value, searchType: this.state.searchType })
            .then(data => {
                this.setState({
                    data: data,
                    loading: false
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
