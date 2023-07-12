import React from 'react'
import { api } from '../api/base';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import ChangePieChart from '../components/ChangePieChart'

const CityIndustry = (props) => {

    const [displayData, setDisplayData] = useState({
        industryNum: [],
        industryName: [],
    });


    const dataLine = async (url) => {
        const res = await api(url);
        console.log(res)
        const _displayData = res.reduce(
            (pre, cur) => {
                pre.industryNum.push(cur.cnt);
                pre.industryName.push(cur.industry);
                return pre;
            },
            {
                industryNum: [],
                industryName: [],
            },
        );
        setDisplayData(_displayData);
    };


    const cityName = useSelector((state) => state.city.city.city)
    console.log(cityName)


    useEffect(() => {
        dataLine("/city_industry?name=" + cityName)
    }, [cityName]);

    return (
        <ChangePieChart
            seriesData={displayData.industryNum}
            seriesName={displayData.industryName}
            text='行业占比'
            proportion='30%'
        />
    )
}

export default CityIndustry
