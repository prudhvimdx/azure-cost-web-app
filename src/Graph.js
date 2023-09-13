import React, { Component } from "react";
import Chart from "chart.js";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Price",
            data: [100, 150, 200, 250, 300, 350],
            borderColor: "red",
            backgroundColor: "red",
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <Chart
          data={this.state.data}
          type="line"
          options={{
            title: "Price Chart",
            xAxisLabel: "Month",
            yAxisLabel: "Price",
          }}
        />
      </div>
    );
  }
}

export default Graph;
