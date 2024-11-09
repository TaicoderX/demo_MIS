import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    const { barChartData, barChartOptions } = this.props;

    if (barChartData && barChartOptions) {
      this.setState({
        chartData: barChartData,
        chartOptions: barChartOptions,
      });
    } else {
      console.error("Dữ liệu biểu đồ không hợp lệ.");
    }
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.barChartData !== this.props.barChartData ||
      prevProps.barChartOptions !== this.props.barChartOptions
    ) {
      this.setState({
        chartData: this.props.barChartData,
        chartOptions: this.props.barChartOptions,
      });
    }
  }


  render() {
    const { chartData, chartOptions } = this.state;

    if (!chartData.length || Object.keys(chartOptions).length === 0) {
      return <div>Đang tải dữ liệu...</div>;
    }

    return (
      <Chart
        options={chartOptions}
        series={chartData}
        type="bar"
        width="100%"
        height="100%"
      />
    );
  }

}

export default BarChart;
