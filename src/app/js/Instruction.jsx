import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Instruction extends Component {
    render() {
        if (!this.props.user) return <Redirect to="/auth/sign-in" />;
        return (
            <div className="container">
                <h1>Some description</h1>
            </div>
        );
    }
}

export default Instruction;
