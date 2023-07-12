import React from 'react'
import BarChart from '../components/BarChart'
import { api } from '../api/base';
import { useEffect, useState } from 'react';
import ChangeBarChart from '../components/ChangeBarChart'

const CustomBarChart = (props) => {
    const [displayData, setDisplayData] = useState({
        xLabelData: [],
        posNumData: [],
        companyNumData: [],
    });

    const dataLine = async (url) => {
        const res = await api(url);
        console.log(res)
        const _displayData = res.reduce(
            (pre, cur) => {
                pre.xLabelData.push(cur.name);
                pre.companyNumData.push(cur.company_num);
                pre.posNumData.push(cur.pos_num);
                return pre;
            },
            { xLabelData: [], posNumData: [], companyNumData: [] },
        );
        setDisplayData(_displayData);
    };

    useEffect(() => {
        dataLine("/city_top?num=10")
    }, []);


    return (
        <ChangeBarChart
            title="热门top10城市岗位数量和公司数量"
            xData={displayData.xLabelData}
            seriesData1={displayData.companyNumData}
            seriesData2={displayData.posNumData}
        />
    )
}

export default CustomBarChart