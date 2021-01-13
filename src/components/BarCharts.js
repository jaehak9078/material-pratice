import React, { useEffect, useRef } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const data = [
    { date: "1월", revenue: 4215 },
    { date: "2월", revenue: 5312 },
    { date: "3월", revenue: 6251 },
    { date: "4월", revenue: 7841 },
    { date: "5월", revenue: 9821 },
    { date: "6월", revenue: 14984 },
  ];


const BarCharts = () => {
    const chart = useRef(null);
    useEffect(()=>{
        chart.current = am4core.create("chartdiv",am4charts.XYChart);
        chart.current.paddingRight = 20;
        chart.current.data = data;

        let categoryAxis = chart.current.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "date";
        categoryAxis.renderer.minGridDinstance = 40;
        categoryAxis.fontSize = 11;

        let valueAxis = chart.current.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.max = 20000;
        valueAxis.strictMinMax = true;
        valueAxis.renderer.minGridDinstance = 30;

        let series = chart.current.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "date";
        series.dataFields.valueY = "revenue";
        series.columns.template.tooltipText = "{valueY.revenue}";
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