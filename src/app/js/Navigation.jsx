import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => {
    return (
        <div className="navigation">
            <div className="container nav-content">
                <div>
                    <Link className="link nav-link" to="/">
                        logo/home
                    </Link>
                    {props.user && (
                        <span>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/profile">
                                your profile
                            </Link>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/search">
                                search
                            </Link>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/search">
                                how does it work?
                            </Link>
                        </span>
                    )}
                </div>
                <div>
                    {props.user ? (
                        <span>
                            <Link className="link nav-link" to="/auth/logout">
                                Logout
                            </Link>
                        </span>
                    ) : (
                        <span>
                            <Link className="link nav-link" to="/">
                                what is it about?
                            </Link>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/auth/sign-in">
                                Sign in
                            </Link>
                            &nbsp; &nbsp; &nbsp;
                            <Link className="link nav-link" to="/auth/sign-up">
                                Sign up
                            </Link>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navigation;
