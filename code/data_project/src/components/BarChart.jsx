import React, { useEffect, useRef } from 'react';
import * as echarts from "echarts";
// import { echartsResize } from './util';

const Index = (props) => {

    const chartRef = useRef();  //拿到DOM容器
    // const [data,setData]=useState(props)

    // 每当props改变的时候就会实时重新渲染
    useEffect(() => {
        const chart = echarts.init(chartRef.current);   //echart初始化容器
        chart.clear()
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
                // },//鼠标移上的阴影，默认是线
                formatter: function (params) {
                    return params[0].name + ': ' + params[0].value + 'k';
                }
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
            axisLabel: {
                show: true,
                lineStyle: {
                    color: 'white'
                },
                textStyle: {
                    color: 'white',
                    fontSize: 16
                },
                formatter: function (value) {
                    var res = value;
                    if (res.length > 4) {
                        res = res.substring(0, 3) + "..";
                    }
                    return res;
                }
            },
            grid: {
                top: '15%',
                left: '15%',
                right: '15%',
                bottom: '15%'
            },
            dataZoom: [
                {
                    type: 'slider',
                    show: true,
                    start: 0,
                    end: 30,
                    xAxisIndex: [0],
                    bottom: -10
                },
            ],
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

        // return () => {
        //     // 在组件卸载时销毁图表实例
        //     chart.dispose();
        // };

    }, [props]);







    return <div ref={chartRef} className="chart" ></div>
};

export default Index;



// import React, { useEffect, useRef, useState } from 'react';
// import * as echarts from 'echarts';
// import { echartsResize } from './util';
// import { set } from 'lodash';

// const Index = (props) => {
//     const chartRef = useRef(null); //拿到DOM容器

//     const { title, xData, seriesData1, seriesData2 } = props;
//     const [render, setRender] = useState(Date.now());

//     // 每当props改变的时候就会实时重新渲染
//     useEffect(() => {
//         const chart = echarts.init(chartRef.current); //echart初始化容器
//         chart.clear()
//         let option = {
//             //配置项(数据都来自于props)
//             title: {
//                 text: title ? title : '',
//             },
//             xAxis: {
//                 type: 'category',
//                 data: xData,
//                 axisLabel: {
//                     interval: 0,
//                 },
//             },
//             yAxis: {
//                 type: 'value',
//             },

//             grid: {
//                 top: '15%',
//                 left: '15%',
//                 right: '15%',
//                 bottom: '15%',
//             },
//             series: [
//                 {
//                     data: seriesData1,
//                     type: 'bar',
//                 },
//                 {
//                     data: seriesData2,
//                     type: 'bar',
//                 },
//             ],
//         };

//         chart.setOption(option);
//         // echartsResize(chart);

//         return () => {
//             // 在组件卸载时销毁图表实例
//             chart.dispose();
//         };
//     }, []);

//     useEffect(() => {
//         if (props) {

//             // const chart = echarts.getInstanceByDom(chartRef.current);


//             const chart = echarts.getInstanceByDom(chartRef.current);
//             chart.clear()


//             // 更新图表的配置项
//             const updatedOptions = {
//                 title: {
//                     text: title ? title : '',
//                 },
//                 xAxis: {
//                     type: 'category',
//                     data: xData,
//                     axisLabel: {
//                         interval: 0,
//                     },
//                 },
//                 yAxis: {
//                     type: 'value',
//                 },
//                 grid: {
//                     top: '15%',
//                     left: '15%',
//                     right: '15%',
//                     bottom: '15%',
//                 },
//                 series: [
//                     {
//                         data: seriesData1,
//                         type: 'bar',
//                     },
//                     {
//                         data: seriesData2,
//                         type: 'bar',
//                     },
//                 ],
//             };

//             // 使用 setOption 方法更新图表
//             chart.setOption(updatedOptions);
//             setRender(Date.now());
//         }
//     }, [title, xData, seriesData1, seriesData2, props]);

//     return <div ref={chartRef} className="chart"></div>;
// };

// export default Index;