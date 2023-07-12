import React from 'react'
import { api } from '../api/base';
import { useEffect, useState } from 'react';
import Pulldown from '../components/Pulldown';
import { Provider } from 'react-redux'
import store from '../store/index'

const CitySelect = (props) => {
    const [displayData, setDisplayData] = useState({
        cityName: []
    });

    const dataLine = async (url) => {
        const res = await api(url);
        console.log(res)
        const _displayData = res.reduce(
            (pre, cur) => {
                pre.cityName.push(cur.city_name);
                return pre;
            },
            { cityName: [] },
        );
        setDisplayData(_displayData);
    };

    useEffect(() => {
        dataLine("/city_location")
    }, []);


    return (

        <Provider store={store}>
            <Pulldown cityData={displayData.cityName} />
        </Provider>
    )
}

export default CitySelect