import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

class DoughnutChart extends Component {
    constructor(props) {
        super(props);
        window.sentiment = this.props.data.sentiment.toUpperCase();
        text();

        const stats = this.props.data;
        const amount =
            stats.positiveTweets + stats.negativeTweets + stats.neutralTweets + stats.mixedTweets;
        let multiplyFactor = 100 / amount;

        this.state = {
            chartData: {
                datasets: [
                    {
                        data: [
                            (stats.positiveTweets * multiplyFactor).toFixed(2),
                            (stats.negativeTweets * multiplyFactor).toFixed(2),
                            (stats.neutralTweets * multiplyFactor).toFixed(2),
                            (stats.mixedTweets * multiplyFactor).toFixed(2)
                        ],

                        backgroundColor: ['#E19C9B', '#455B71', '#A4BBC8', '#FCD5BB'],
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
                                display: function(context) {
                                    return context.dataset.data[context.dataIndex] !== '0.00';
                                },
                                color: 'black',
                                anchor: 'end',
                                fontFamily: "'Work Sans', sans-serif",
                                borderWidth: 2,
                                borderColor: '#fff',
                                borderRadius: 5,
                                backgroundColor: '#fff',
                                padding: 3,
                                formatter: function(value) {
                                    return value + '%';
                                }
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
