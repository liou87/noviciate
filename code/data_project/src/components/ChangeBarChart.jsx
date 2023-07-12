import React, { useEffect, useRef } from 'react';
import * as echarts from "echarts";
// import { echartsResize } from './util';

const Index = (props) => {

    const chartRef = useRef(null);  //拿到DOM容器

    useEffect(() => {
        const chart = echarts.init(chartRef.current);   //echart初始化容器

        chart.clear()
        // getData(props)
        let option = {  //配置项(数据都来自于props)
            title: {
                text: props.title ? props.title : "",
                textStyle: { //图例文字的样式
                    color: 'rgb(254,227,203)',
                    fontSize: 16
                },
            },
            tooltip: {
                trigger: 'axis',
                // axisPointer: {
                //     type: 'shadow'
                // // },//鼠标移上的阴影，默认是线
                // formatter: function (params) {
                //     return params[0].name + "公司数量：" + params[0].value + "职位数量：" + params[1].value;
                // }
                formatter: function (params) {
                    return `${params[0].name}<br />公司数量: ${params[0].value}<br />职位数量: ${params[1].value}`;
                },
            },
            xAxis: {
                type: 'category',
                data: props.xData,
                axisLabel: {
                    interval: 0,
                },
            },
            yAxis: {
                type: 'value'
            },

            grid: {
                top: '15%',
                left: '15%',
                right: '15%',
                bottom: '15%'
            },
            series: [{
                data: props.seriesData1,
                type: 'bar',
            },
            {
                data: props.seriesData2,
                type: 'bar'
            }]
        };

        chart.setOption(option);
        // echartsResize(chart);

        return () => {
            // 在组件卸载时销毁图表实例
            chart.dispose();
        };

    }, []);




    useEffect(() => {
        // const chartElement = document.getElementById("Cityone")
        // const chartNew = echarts.getInstanceByDom(chartElement)
        const chartNew = echarts.getInstanceByDom(chartRef.current)
        console.log(chartRef.current)
        if (props) {

            // getData(props)
            // 更新图表的配置项
            let updatedOptions = {
                title: {
                    text: props.title ? props.title : "",
                },
                xAxis: {
                    type: 'category',
                    data: props.xData,
                    axisLabel: {
                        interval: 0,
                    },
                },
                yAxis: {
                    type: 'value'
                },
                grid: {
                    top: '15%',
                    left: '15%',
                    right: '15%',
                    bottom: '15%'
                },
                series: [{
                    data: props.seriesData1,
                    type: 'bar',
                },
                {
                    data: props.seriesData2,
                    type: 'bar'
                }]
            };


            // 使用 setOption 方法更新图表
            chartNew.setOption(updatedOptions);
        }
    }, [props]);




    return <div ref={chartRef} className="chart" id={props.id}></div>
};

export default Index;
