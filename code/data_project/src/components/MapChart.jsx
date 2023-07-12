import React, { useEffect, useRef } from 'react';
import * as echarts from "echarts";
import china from '../assets/china.json'

// import { echartsResize } from './util';

const Index = (props) => {

    echarts.registerMap("china", { geoJSON: china });

    const chartRef = useRef();  //拿到DOM容器

    function dataHandle(arr1, arr2) {
        var str = [];
        for (var i = 0; i < arr1.length; i++) {
            var str3 = {};
            str3.name = arr1[i];
            str3.value = arr2[i];
            str.push(str3)
        }
        console.log(str3)
        return str
    }
    // 每当props改变的时候就会实时重新渲染
    useEffect(() => {
        const chart = echarts.init(chartRef.current);   //echart初始化容器

        var option = {
            geo: {
                map: 'china',
                label: {
                    normal: {
                        show: false, //显示省份标签
                    },
                    emphasis: { //对应的鼠标悬浮效果
                        show: false,
                        textStyle: {
                            color: "#fff"
                        }
                    }
                },
                roam: false,//是否开启鼠标缩放和平移漫游
                itemStyle: {//地图区域的多边形 图形样式
                    normal: {//是图形在默认状态下的样式
                        borderWidth: .5, //区域边框宽度
                        borderColor: '#fff', //区域边框颜色
                        // areaColor: "#3EABFF", //区域颜色
                        areaColor: "rgba(45,145,223,0.6)",
                    },
                    emphasis: {//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                        borderWidth: .5,
                        borderColor: '#fff',
                        areaColor: "#0078FF",
                        label: { show: true }
                    }
                },
                aspectScale: 0.75,
                top: '25%',
                zoom: 1.5,//地图缩放比例,默认为1
            },
            title: {  //标题样式
                text: '',
                x: "center",
                textStyle: {
                    fontSize: 18,
                    color: "#fff"
                },
            },
            tooltip: {  //这里设置提示框
                trigger: 'item',  //数据项图形触发
                formatter: '{b}: {c}',
                // show: false,
                // backgroundColor: "#fff",  //提示框浮层的背景颜色。

            },
            visualMap: {//视觉映射组件
                show: false,
                top: 'center',
                left: 'left',
                min: 1,
                max: 100,
                text: ['High', 'Low'],
                realtime: false,  //拖拽时，是否实时更新
                calculable: true,  //是否显示拖拽用的手柄
                inRange: {
                    // color: ['lightskyblue', 'yellow', 'orangered']
                    color: ['#80D8FF', '#40C4FF', '#00B0FF', '#0091EA', '#007BB2']


                }
            },
            series: [
                {
                    name: '',
                    type: 'effectScatter', // series图表类型
                    coordinateSystem: 'geo', // series坐标系类型
                    symbolSize: function (val) {//设置散点大小
                        return val[2] / (val[2] / 16)
                    },
                    data: dataHandle(props.seriesData1, props.seriesData2),
                    tooltip: {
                        show: true,
                        trigger: 'item',  //数据项图形触发
                        backgroundColor: "#fff",  //提示框浮层的背景颜色。
                        borderColor: 'rgba(0,0,0,0)',
                        // formatter: '{b} 职位数 {c}',
                        formatter: (params) => {
                            const { name, value } = params.data;
                            const truncatedValue = value[2].toFixed(0); // 将数值保留为整数
                            return `${name} <br>职位数 ${truncatedValue}`;
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#0041D2',
                        }
                    },
                    label: {
                        normal: {
                            show: true, //显示省份标签
                            position: 'right',
                            textStyle: {
                                color: "#0041D2",//标签字体颜色
                            },
                            formatter: '{b}'
                        },
                    },
                    rippleEffect: {//涟漪特效相关配置
                        brushType: 'stroke'//波纹的绘制方式，可选 'stroke' 和 'fill'
                    },
                }
            ]
        };
        chart.setOption(option);
    }, [props]);

    return <div ref={chartRef} className="chart" style={{ height: "100%", width: "100%" }}></div>
}

export default Index;
