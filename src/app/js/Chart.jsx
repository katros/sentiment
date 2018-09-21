import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                datasets: [
                    {
                        data: [
                            this.props.data.positiveTweets,
                            this.props.data.negativeTweets,
                            this.props.data.neutralTweets,
                            this.props.data.mixedTweets
                        ],

                        backgroundColor: ['#ff9000', '#cd185b', '#4bb5ab', '#e7e8ea'],
                        borderColor: ['#000', '#000', '#000', '#000']
                    }
                ],
                labels: ['positive', 'negative', 'neutral', 'mixed']
            }
        };
    }
    render() {
        return (
            <div className="chart">
                <Doughnut
                    data={this.state.chartData}
                    width={1000}
                    height={500}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        );
    }
}

export default Chart;
