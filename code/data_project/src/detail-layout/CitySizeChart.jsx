import React from 'react'
import { api } from '../api/base';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import ChangePieChart from '../components/ChangePieChart'

const CitySizeChart = (props) => {

    const [displayData, setDisplayData] = useState({
        sizeNum: [],
        sizeName: [],
    });


    const dataLine = async (url) => {
        const res = await api(url);
        console.log(res)
        const _displayData = res.reduce(
            (pre, cur) => {
                pre.sizeNum.push(cur.cnt);
                pre.sizeName.push(cur.company_size);
                return pre;
            },
            {
                sizeNum: [],
                sizeName: [],
            },
        );
        setDisplayData(_displayData);
    };


    const cityName = useSelector((state) => state.city.city.city)
    console.log(cityName)


    useEffect(() => {
        dataLine("/city_company_size?name=" + cityName)
    }, [cityName]);

    return (
        <ChangePieChart
            seriesData={displayData.sizeNum}
            seriesName={displayData.sizeName}
            text='公司规模占比'
            proportion='28%'
        />
    )
}

export default CitySizeChart
