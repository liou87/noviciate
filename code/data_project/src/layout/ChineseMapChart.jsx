import React from 'react'
import { api } from '../api/base';
import { useEffect, useState } from 'react';
import MapChart from '../components/MapChart'

const ChineseMapChart = (props) => {
    const [displayData, setDisplayData] = useState({
        cityName: [],
        posValue: []
    });

    const dataLine = async (url) => {
        const res = await api(url);
        console.log(res)
        const _displayData = res.reduce(
            (pre, cur) => {
                pre.cityName.push(cur.city_name);
                pre.posValue.push(cur.val);
                return pre;
            },
            { cityName: [], posValue: [] },
        );
        setDisplayData(_displayData);
    };

    useEffect(() => {
        dataLine("/city_location")
    }, []);


    return (
        <MapChart
            seriesData1={displayData.cityName}
            seriesData2={displayData.posValue}
        />
    )
}

export default ChineseMapChart