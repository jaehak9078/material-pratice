import React, { useEffect, useRef, useState } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';

am4core.useTheme(am4themes_animated);




const BarCharts = () => {
    const chart = useRef(null);
  
    

    useEffect(()=>{
        chart.current = am4core.create("chartdiv",am4charts.XYChart);
        chart.current.paddingRight = 20;

        axios.get('/api/chart').then((res)=>{
            console.log(res.data);
            chart.current.data = res.data;
        })
        

        let categoryAxis = chart.current.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "month";
        categoryAxis.renderer.minGridDinstance = 40;
        categoryAxis.fontSize = 11;

        let valueAxis = chart.current.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.max = 20000;
        valueAxis.strictMinMax = true;
        valueAxis.renderer.minGridDinstance = 30;

        let series = chart.current.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "month";
        series.dataFields.valueY = "value";
        series.columns.template.tooltipText = "{valueY.value}";
        series.columns.template.tooltipY = 0;
        series.columns.template.strokeOpacity = 0;

        series.columns.template.adapter.add("fill",function(fill,target){
            return chart.current.colors.getIndex(target.dataItem.index);
        })

        

        return()=>{
            if(chart){
                chart.current.dispose();
            }
        }
    },[]);
    return (
        <div id="chartdiv" style={{width:"100%",height:"500px"}}>
            
        </div>
    );
};

export default BarCharts;