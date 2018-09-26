import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

class DoughnutChart extends Component {
    constructor(props) {
        super(props);
        window.sentiment = this.props.data.sentiment.toUpperCase();
        text();
        this.state = {
            chartData: {
                datasets: [
                    {
                        data: [
                            this.props.data.positiveTweets * 4,
                            this.props.data.negativeTweets * 4,
                            this.props.data.neutralTweets * 4,
                            this.props.data.mixedTweets * 4
                        ],

                        backgroundColor: ['#ECEDF1', '#717686', '#C7CBD7', '#A3A9BD'],
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
                        maintainAspectRatio: false,
                        plugins: {
                            datalabels: {
                                display: true,
                                color: 'black',
                                anchor: 'end',
                                fontFamily: "'Work Sans', sans-serif",
                                borderWidth: 2,
                                borderColor: '#000',
                                borderRadius: 50,
                                backgroundColor: '#fff',
                                padding: 6
                            }
                        }
                    }}
                />
            </div>
        );
    }
}

function text() {
    const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
    Chart.defaults.global.animation.easing = 'easeOutBounce';
    Chart.defaults.global.legend.labels.boxWidth = 80;
    Chart.defaults.global.legend.labels.fontColor = '#fff';
    Chart.defaults.global.legend.labels.fontFamily = "'Work Sans', sans-serif";
    Chart.defaults.global.animation.duration = 2000;
    Chart.defaults.global.tooltips.enabled = false;
    Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
        draw: function() {
            let chart = this.chart.chart;
            let ctx = chart.ctx;
            let width = chart.width;
            let height = chart.height;

            originalDoughnutDraw.apply(this, arguments);

            let fontSize = (height / 250).toFixed(2);
            ctx.font = fontSize + 'em sans-serif';
            ctx.textBaseline = 'middle';

            let text = window.sentiment,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 1.85;

            ctx.fillStyle = 'white';
            ctx.fillText(text, textX, textY);
        }
    });
}

export default DoughnutChart;
