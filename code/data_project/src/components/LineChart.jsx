import React, { useEffect, useRef } from 'react';
import * as echarts from "echarts";
import { echartsResize } from './util';

const Index = (props) => {

    const chartRef = useRef();  //拿到DOM容器

    // 每当props改变的时候就会实时重新渲染
    useEffect(() => {
        const chart = echarts.init(chartRef.current);   //echart初始化容器
        let option = {  //配置项(数据都来自于props)
            title: {
                text: props.title ? props.title : "暂无数据",
                textStyle: { //图例文字的样式
                    color: 'rgb(254,227,203)',
                    fontSize: 16
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
            // itemStyle: {
            //     normal: {
            //         label: {
            //             show: true,     //开启显示
            //             position: 'top',    //在上方显示
            //             textStyle: {        //数值样式
            //                 color: 'black',
            //                 fontSize: 16
            //             }
            //         }
            //     }
            // },
            series: [{
                data: props.seriesData1,
                type: 'line',
            }]
        };

        chart.setOption(option);
        echartsResize(chart);
    }, [props]);

    return <div ref={chartRef} className="chart" ></div>
}

export default Index;
