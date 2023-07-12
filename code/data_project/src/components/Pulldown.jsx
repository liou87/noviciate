import React from 'react'
import { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from "react-redux"
import { setCity } from '../store/actions/cityAction';
// import MyContext from '../Mycontext';
// import CityInfoChart from '../detail-layout/CityInfoChart';

const Index = (props) => {

    const [selectedOption, setSelectedOption] = useState({
        value: '广州'
    });

    function dataHandle(arr1) {
        var str = [];
        for (var i = 0; i < arr1.length; i++) {
            var str3 = {};
            str3.label = arr1[i];
            str3.value = arr1[i];
            str.push(str3)
        }
        return str
    }


    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(`Option selected:`, selectedOption);
    };


    function tackleData(arr) {
        if (arr === "null")
            return '广州'
        else return (arr.value)
    }

    const sharedValue = tackleData(selectedOption)

    ////
    //调用仓库
    const dispatch = useDispatch()
    // const city=useSelector((state)=>state.city)
    function setCityName(str) {
        dispatch(setCity({
            city: str
        }))
    };
    (setCityName(sharedValue));

    const options = dataHandle(props.cityData)

    return (
        <div>
            <Select
                options={options}
                onChange={handleChange}
                className='selector'
            />

        </div>

    );
}

export default Index

