import React from 'react';
import {Chart,PieSeries} from '@devexpress/dx-react-chart-material-ui';
;

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