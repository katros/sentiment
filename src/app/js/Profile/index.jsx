import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Details from '../Details';
import { Link } from 'react-router-dom';

class Profile extends Component {
    render() {
        if (!this.props.user) return <Redirect to="/auth/sign-in" />; // this is actually the protection

        return (
            <div className="container">
                {this.props.user._id}
                <br />
                {this.props.user.email}
                <Link to={'/search'}>SERCH AGAIN</Link>
                <Details />
            </div>
        );
    }
}

export default Profile;
