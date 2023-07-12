import React, { Component } from 'react'
import { Link } from "react-router-dom";
import CitySelect from '../detail-layout/CitySelect';
import CityInfoChart from '../detail-layout/CityInfoChart';
import CityExpChart from '../detail-layout/CityExpChart';
import CityIndustry from '../detail-layout/CityIndustry';
import CitySizeChart from '../detail-layout/CitySizeChart';
import SalaryPrediction from '../detail-layout/SalaryPrediction';
import { Provider } from 'react-redux'
import store from '../store/index'
import RouteSelector from '../layout/RouteSelector'


export default class Details extends Component {
    render() {
        return (
            <div className='details'>
                <CitySelect className='selector' />
                <div className="header">

                    {/* <ul>
                            <li><Link to='/'>总览页</Link></li>
                            <li><Link to='/details'>详情页</Link></li>
                        </ul> */}
                    <RouteSelector />

                    猎聘岗位数据分析可视化
                </div>
                <div className='detailContent'>
                    <div className="contentHeader">
                        <div className="detailchartone">
                            <Provider store={store}>
                                <CityInfoChart />
                            </Provider>

                        </div>
                        <div className="detailcharttwo">
                            <SalaryPrediction />
                        </div>
                    </div>
                    <div className="contentFooter">
                        <div className="detailchartthree">
                            <Provider store={store}>
                                <CityExpChart />
                            </Provider>
                        </div>
                        <div className="detailchartfour">
                            <Provider store={store}>
                                <CityIndustry />
                            </Provider>
                        </div>
                        <div className="detailchartfive">
                            <Provider store={store}>
                                <CitySizeChart />
                            </Provider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
