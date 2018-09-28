import React from 'react';

const About = () => {
    return (
        <div className="container about">
            <span>
                Sentiment analysis is the process of computationally identifying and categorizing
                opinions expressed in the text, especially in order to determine the writer's attitude.
            </span>

            <span>
                <span className="app-name">Sentiment</span> is a tool that allows the user to discover
                current sentiment of tweets searched by a specific keyword.
            </span>

            <span>
                Analysis is applied with the help of natural language processing (NLP) service that uses
                machine learning to identify language patterns and to discover relationships in the text.
                Tweets are classified as positive, negative, neutral, or mixed, depending on their
                content. The accuracy of sentiment detection is measured by the level of confidence.
            </span>
        </div>
    );
};

export default About;
