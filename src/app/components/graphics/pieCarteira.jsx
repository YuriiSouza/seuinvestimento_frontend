import React from 'react';
import Chart from 'react-apexcharts';

class PieCarteira extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'donut',
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        labels: ['Amazon', 'Coca', 'BMW', 'UPC']
      },
      series: [321, 4231, 2231, 103],
    };
  }

  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="400"
        />
      </div>
    );
  }
}

export default PieCarteira;


