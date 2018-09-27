import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => {
    return (
        <div className="navigation">
            <div className="container nav-content">
                <div>
                    <Link className="link nav-link logo" to="/">
                        sentiment
                    </Link>
                </div>
                <div className="nav-wrap">
                    {props.user && (
                        <span>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/search">
                                search
                            </Link>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/profile">
                                your profile
                            </Link>
                            &nbsp; &nbsp; &nbsp;
                        </span>
                    )}
                    {props.user ? (
                        <span>
                            <Link className="link nav-link" to="/auth/logout">
                                logout
                            </Link>
                        </span>
                    ) : (
                        <span>
                            <Link className="link nav-link" to="/about">
                                about
                            </Link>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/auth/sign-in">
                                sign in
                            </Link>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/auth/sign-up">
                                sign up
                            </Link>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
