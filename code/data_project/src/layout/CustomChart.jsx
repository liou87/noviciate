import React from 'react'
import LineChart from '../components/LineChart'
import { api } from '../api/base';
import { useEffect, useState } from 'react';

const CustomChart = (props) => {
    const [displayData, setDisplayData] = useState({
        xLabelData: [],
        posNumData: [],
        companyNumData: [],
        portionData: [],
    });

    const dataLine = async (url) => {
        const res = await api(url);
        console.log(res)
        const _displayData = res.reduce(
            (pre, cur) => {
                pre.xLabelData.push(cur.name);
                pre.companyNumData.push(cur.company_num);
                pre.posNumData.push(cur.pos_num);
                pre.portionData.push(cur.pos_num / cur.company_num);
                return pre;
            },
            { xLabelData: [], posNumData: [], companyNumData: [], portionData: [] },
        );
        setDisplayData(_displayData);
    };

    useEffect(() => {
        dataLine("/city_top?num=10")
    }, []);


    return (
        <LineChart
            title="岗位数与公司数的关系"
            xData={displayData.xLabelData}
            seriesData1={displayData.portionData}
        // seriesData2={displayData.posNumData}
        />
    )
}

export default CustomChart