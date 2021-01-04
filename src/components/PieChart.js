import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Chart,PieSeries} from '@devexpress/dx-react-chart-material-ui';
import { ArgumentAxis } from '@devexpress/dx-react-chart';

const data = [
    {color:'Red', area: 8.32},
    {color:'Blue', area: 12.21},
    {color:'Green', area: 15.58},
    {color:'Yellow', area: 11.25},
];

const PieChart = () => {
    return (
        <div>
            <Chart data={data}>
                
                <PieSeries valueField="area" argumentField="color" />
            </Chart>
        </div>
    );
};

export default PieChart;