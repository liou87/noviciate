import React, { useEffect, useState } from 'react'
import { api } from '../api/base';
import 'animate.css';
const SalaryPrediction = () => {
    const [jobTitle, setJobTitle] = useState([]);
    const [experience, setExperience] = useState([]);
    const [city, setCity] = useState([]);
    const [salary, setSalary] = useState('');
    const [jobTitleOptions, setJobTitleOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);
    const [experienceOptions, setExperienceOptions] = useState([]);


    const dataLine = async (url) => {
        const res = await api(url);
        console.log(res);
        setCityOptions(res.city_name || []);
        setJobTitleOptions(res.industry_name || []);
        setExperienceOptions(res.education_name || []);
    };

    useEffect(() => {
        dataLine("/option")
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 调用接口获取薪资水平
        setSalary('')
        try {
            const response = await fetch('http://192.168.94.112:5000/predict_salary?industry=' + jobTitle + "&edu=" + experience + "&city=" + city, {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/x-www-form-urlencoded',
                // },
                // body: JSON.stringify({
                //     industry: jobTitle,
                //     edu: experience,
                //     city: city
                // }),

            });
            const data = await response.json();
            console.log(data)
            // 更新薪资水平的状态
            setSalary(data.salary);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>   <img src={require('../assets/icons/岗位.png')} alt="" />岗位：</li>
                    <li>
                        <select value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}>
                            <option value="">请选择岗位</option>
                            {
                                // jobTitle.map(option => (
                                //     <option key={option} value={option}>{option}</option>
                                // ))
                                jobTitleOptions.map((element, index) => {
                                    return <option key={index} value={element}>{element}</option>
                                })
                            }
                        </select>
                    </li>
                    <li>  <img src={require('../assets/icons/学历.png')} alt="" />学历：</li>
                    <li>
                        <select value={experience} onChange={(e) => setExperience(e.target.value)}>
                            <option value="">请选择学历</option>
                            {
                                experienceOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))
                            }
                        </select>
                    </li>
                    <li>    <img src={require('../assets/icons/城市(2).png')} alt="" />城市：</li>
                    <li>
                        <select value={city} onChange={(e) => setCity(e.target.value)}>
                            <option value="">请选择城市</option>
                            {cityOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </li>
                    <button type="submit">查看预期薪资</button>
                </ul>

            </form>

            {salary && <div className='salaryPrediction animate__bounceIn'   >  <li className='result'>您的预期薪资为:</li>{salary}k</div>}

        </div>
    )

}

export default SalaryPrediction