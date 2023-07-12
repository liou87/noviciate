import React, { useEffect, useRef } from 'react';
import * as echarts from "echarts";


const Index = (props) => {

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
        let option = {
            title: {
                // text: '某站点用户访问来源',
                text: '企业规模用人需求占比',
                subtext: '',
                bottom: "50px",
                left: "30%",
                textStyle: { //图例文字的样式
                    color: 'rgb(254,227,203)',
                    fontSize: 16
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            grid: {
                top: '100px'
            },
            legend: {
                // orient: 'vertical',
                left: 'left',
                itemWidth: 40,
                itemHeight: 20,
                textStyle: { //图例文字的样式
                    color: 'rgb(254,227,203)',
                    fontSize: 16
                },

            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    label: {
                        //不显示文字
                        show: false
                    },
                    labelLine: {
                        //不显示引导线
                        show: false
                    },
                    // gird: {
                    //     top: '100px'
                    // },
                    center: ['50%', '60%'],
                    itemStyle: {
                        normal: {
                            color: function (colors) {
                                var colorList = [
                                    '#0c687d',
                                    '#0c8099',
                                    '#2e91a8',
                                    '#419296',
                                    '#6ea8ac',
                                    '#75bedc',
                                    '#94a7ad',
                                    '#92babc',
                                    '#9dbfae',
                                    '#bad2c5',
                                    '#ecd0ba',
                                    '#d1b296',
                                    '#ae8158',
                                    '#ececec'
                                ];
                                return colorList[colors.dataIndex];
                            }
                        },
                    },
                    radius: '70%',
                    data: dataHandle(props.seriesName, props.seriesData),
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        chart.setOption(option);

    }, [props]);

    return <div ref={chartRef} className="chart"></div>
}

export default Index;