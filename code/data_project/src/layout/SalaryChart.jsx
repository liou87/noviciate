// import React from 'react'
import { api } from '../api/base';
import { useEffect, useState } from 'react';
import BarChart from '../components/BarChart'

const SalaryChart = (props) => {
    const [displayData, setDisplayData] = useState({
        xLabelData: [],
        avgsalaryData: [],
    });

    const dataLine = async (url) => {
        const res = await api(url);
        console.log(res)
        const _displayData = res.reduce(
            (pre, cur) => {
                pre.xLabelData.push(cur.name);
                pre.avgsalaryData.push(cur.avg_salary);
                return pre;
            },
            { xLabelData: [], avgsalaryData: [], },
        );
        setDisplayData(_displayData);
    };

    useEffect(() => {
        dataLine("/salary_top?num=10")
    }, []);

    return (
        <BarChart
            // title="柱状图模拟数据"
            xData={displayData.xLabelData}
            seriesData1={displayData.avgsalaryData}
            title="平均薪资前十岗位"
        />
    )
}

export default SalaryChart