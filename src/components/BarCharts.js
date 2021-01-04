import React from 'react';
import {Chart,BarSeries,ScatterSeries,ArgumentAxis,ValueAxis} from '@devexpress/dx-react-chart-material-ui';
import { Stack } from '@devexpress/dx-react-chart';

const data = [
    { month: 'January', revenue: 4215 },
    { month: 'February', revenue: 5312 },
    { month: 'March', revenue: 6251 },
    { month: 'April', revenue: 7841 },
    { month: 'May', revenue: 9821 },
    { month: 'June', revenue: 14984 },
  ];

const BarCharts = () => {
    return (
        <div>
            <Chart data={data}>
                <ArgumentAxis />
                <ValueAxis/>
                <BarSeries valueField="revenue" argumentField="month" />
                <Stack />
            </Chart>
        </div>
    );
};

export default BarCharts;