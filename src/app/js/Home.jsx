// import React from 'react'

// const Home = props => {
//     return (
//         <div className="container">
//             {/* <h1>Hello, {props.user ? props.user.email : 'Stranger'}!</h1> */}
//             <div className="title-container">

//             <h1>Hello, {props.user ? props.user.email : 'Stranger'}!</h1>
//             <h1 className="subtitle">Do you want to find out what they think?</h1>
//             </div>
//         </div>
//     )
// }

// export default Home

import React, { Component } from 'react';
import Typed from 'typed.js';

class Home extends Component {
    componentDidMount() {
        const { strings } = this.props;
        const options = {
            strings: ['#brand', 'mappiness', '@nickname'],
            typeSpeed: 200,
            backSpeed: 10,
            loop: true
        };
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (
            <div className="wrap title-container">
                <div className="type-wrap">
                    <span
                        style={{ whiteSpace: 'pre' }}
                        ref={el => {
                            this.el = el;
                        }}
                    />
                </div>
                <h1 className="subtitle">Wanna find out what do they think?</h1>
            </div>
        );
    }
}

export default Home;
