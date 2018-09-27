import React from 'react';

const About = () => {
    return (
        <div className="container about">
            <span>
                Sentiment analysis is the process of computationally identifying and categorizing
                opinions expressed in the text, especially in order to determine whether the writer's
                attitude is positive, negative, or neutral.
            </span>

            <span>
                <span className="app-name">Sentiment</span> is a tool that allows user to discover
                current sentiment of tweets searched by a specific keyword.
            </span>

            <span>
                Analysis is applied with the help of natural language processing (NPL) service that uses
                machine learning to identify language patterns and to discover relationships in the text.
            </span>
        </div>
    );
};

export default About;
