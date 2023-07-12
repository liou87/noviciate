import React from 'react'
// import BarChart from '../components/BarChart'
import { api } from '../api/base';
import { useEffect, useState } from 'react';
import ChangeBarChart from '../components/ChangeBarChart'
import { useSelector } from "react-redux"

const CityInfoChart = (props) => {
    const [displayData, setDisplayData] = useState({
        xLabelData: [],
        posNumData: [],
        companyNumData: [],
    });

    const resetArray = () => {
        setDisplayData({
            xLabelData: [],
            posNumData: [],
            companyNumData: [],
        });
    };


    const dataLine = async (url) => {
        const res = await api(url);
        console.log(res)
        resetArray()
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

    //store
    const cityName = useSelector((state) => state.city.city.city)
    console.log(cityName)


    useEffect(() => {
        dataLine("/city_info?name=" + cityName)
    }, [cityName]);

    // console.log(displayData)

    return (
        <ChangeBarChart
            title="该城市岗位和公司数量"
            xData={displayData.xLabelData}
            seriesData1={displayData.companyNumData}
            seriesData2={displayData.posNumData}
            id="Cityone"
        />
    )
}

export default CityInfoChart