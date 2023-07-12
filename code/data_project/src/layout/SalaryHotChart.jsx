import React from 'react'
import { api } from '../api/base';
import { useEffect, useState } from 'react';
import BarChart from '../components/BarChart'

const SalaryHotChart = (props) => {
    const [displayData, setDisplayData] = useState({
        xLabelData: [],
        cntData: [],
        avgsalaryData: [],
    });

    const dataLine = async (url) => {
        const res = await api(url);
        console.log(res)
        const _displayData = res.reduce(
            (pre, cur) => {
                pre.xLabelData.push(cur.name);
                pre.cntData.push(cur.cnt);
                pre.avgsalaryData.push(cur.avg_salary);
                return pre;
            },
            { xLabelData: [], cntData: [], avgsalaryData: [], },
        );
        setDisplayData(_displayData);
    };

    useEffect(() => {
        dataLine("/pos_top?num=10")
    }, []);

    return (
        <BarChart
            // title="柱状图模拟数据"
            xData={displayData.xLabelData}
            seriesData1={displayData.avgsalaryData}
            title="热门岗位薪资待遇top10"
        />
    )
}

export default SalaryHotChart