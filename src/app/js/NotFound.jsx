import React from 'react';

const NotFound = () => {
    return (
        <div className="container">
            <div className="container-wave">
                <div className="coast">
                    <div className="wave-rel-wrap">
                        <div className="wave" />
                    </div>
                </div>
                <div className="coast delay">
                    <div className="wave-rel-wrap">
                        <div className="wave delay" />
                    </div>
                </div>
                <div className="text text-a">4</div>
                <div className="text text-b">0</div>
                <div className="text text-c">4</div>
                <p>The page you are looking for does not exist.</p>
            </div>
        </div>
    );
};

export default NotFound;
