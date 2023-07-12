import React from 'react'
import { api } from '../api/base';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import ChangePieChart from '../components/ChangePieChart'

const CityExpChart = (props) => {

    const [displayData, setDisplayData] = useState({
        expNum: [],
        expYear: [],
    });


    const dataLine = async (url) => {
        const res = await api(url);
        console.log(res)
        const _displayData = res.reduce(
            (pre, cur) => {
                pre.expNum.push(cur.cnt);
                pre.expYear.push(cur.exp_year);
                return pre;
            },
            {
                expNum: [],
                expYear: [],
            },
        );
        setDisplayData(_displayData);
    };


    const cityName = useSelector((state) => state.city.city.city)
    console.log(cityName)


    useEffect(() => {
        dataLine("/city_exp?name=" + cityName)
    }, [cityName]);

    return (
        <ChangePieChart
            seriesData={displayData.expNum}
            seriesName={displayData.expYear}
            proportion="22%"
            text="工作经验需求占比"
        />
    )
}

export default CityExpChart
