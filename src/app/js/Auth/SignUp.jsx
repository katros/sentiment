import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    componentDidMount() {
        this.props.handleInputChange('email', '');
        this.props.handleInputChange('password', '');
    }

    render() {
        return (
            <div className="container sign-wrapper">
                <h1 className="sign-title">SignUp</h1>
                <input
                    type="email"
                    value={this.props.email}
                    onChange={evt => this.props.handleInputChange('email', evt.target.value)}
                    className="input"
                    placeholder="e-mail"
                    spellCheck="false"
                />
                <br />
                <br />
                <input
                    type="password"
                    value={this.props.password}
                    onChange={evt => this.props.handleInputChange('password', evt.target.value)}
                    className="input"
                    placeholder="password"
                />
                <br />
                <br />
                <div className="portfolio-experiment" onClick={() => this.props.sign('up')}>
                    <a>
                        <span className="text">Sign Up</span>
                        <span className="line -right" />
                        <span className="line -top" />
                        <span className="line -left" />
                        <span className="line -bottom" />
                    </a>
                </div>
                <br />
                <br />
                <p>{this.props.error}</p>
                <div className="separator" />

                <div>
                    <span>Have an account already? </span>
                    <Link className="link" to="/auth/sign-in">
                        Sign in.
                    </Link>
                </div>
            </div>
        );
    }
}

export default SignUp;
