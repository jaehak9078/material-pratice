import React from 'react';
import {Chart,LineSeries,ScatterSeries,ArgumentAxis,ValueAxis} from '@devexpress/dx-react-chart-material-ui';
import {  ArgumentScale, SplineSeries, Stack, ValueScale } from '@devexpress/dx-react-chart';


const data = [
    {
        argument: 0, Value: 10000,
      },
      {
        argument: 1, Value: 30000,
      },
      {
        argument: 3, Value: 26263,
      },
      {
        argument: 4, Value: 18394,
      },
      {
        argument: 5, Value: 18287,
      },
      {
        argument: 6, Value: 28682,
      },
      {
        argument: 7, Value: 31274,
      },
      {
        argument: 8, Value: 33259,
      },
      {
        argument: 9, Value: 25849,
      },
      {
        argument: 10, Value: 24159,
      },
      {
        argument: 11, Value: 32651,
      },
      {
        argument: 12, Value: 31984,
      },
      {
        argument: 13, Value: 38451,
      },
];

const AreaChart = () => {
    return (
        <div>
            <Chart data={data}>
                <ArgumentAxis />
                <ValueAxis />
                <SplineSeries valueField="Value" argumentField="argument" />
                <ScatterSeries valueField="Value" argumentField="argument" color="#0275d8"/> 
                <Stack />
            </Chart>
        </div>
    );
};

export default AreaChart;