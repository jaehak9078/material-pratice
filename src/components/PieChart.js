import React, { useEffect, useRef } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';
;

am4core.useTheme(am4themes_animated);

const PieChart = () => {
    const pieChart = useRef(null);
    useEffect(()=>{

        pieChart.current = am4core.create("chartdiv3", am4charts.PieChart);

        axios.get('/api/chart')
        .then((res)=>{
            pieChart.current.data = res.data;
        })
        
        let pieSeries = pieChart.current.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "month";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        return()=>{
            !pieChart && pieChart.current.dispose();
        }
    },[]);

    return (
        <div id="chartdiv3" style={{width:"100%",height:"500px"}}>
            
        </div>
    );
};

export default PieChart;