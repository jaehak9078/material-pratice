import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";



am4core.useTheme(am4themes_animated);

const AreaChart = () => {
  const [data,setData] = useState([]);
  const chart = useRef(null);
  useEffect(()=>{
    
    


    chart.current = am4core.create("chartdiv2", am4charts.XYChart);
    let categoryAxis = chart.current.xAxes.push(new am4charts.CategoryAxis());
    axios.get('/api/chart')
    .then((res)=>{
      chart.current.data = res.data;
    });
    
   
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.inverse = false;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.startLocation = 0.1;
    categoryAxis.renderer.endLocation = 0.9;
    categoryAxis.renderer.minGridDistance = 60;
    
    

    let valueAxis = chart.current.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    
    valueAxis.renderer.minWidth = 100;

    let series = chart.current.series.push(new am4charts.LineSeries());
    series.dataFields.categoryX = "month";
    series.dataFields.valueY = "value";
    // series.fill = am4core.color("blue");

    series.tooltipText = "{valueY.value}";
    series.tooltip.background.fill = am4core.color("#FFF");
    series.fillOpacity = 0.6;
    // series.stacked =true;
    

    let bullet = series.bullets.push(new am4charts.Bullet());
    let circle = bullet.createChild(am4core.Circle);
    circle.width = 10;
    circle.height = 10;
    circle.horizontalCenter = "middle";
    circle.verticalCenter = "middle";
    chart.current.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.current.scrollbarX = scrollbarX;

    




    return()=>{
      chart && chart.current.dispose();
    }
  },[])

    return (
        <div id="chartdiv2" style={{width:"100%", height:"500px"}}>
           
        </div>
    );
};

export default AreaChart;