import React from "react";
// import { Link } from "react-router-dom";
import CustomChart from "../layout/CustomChart";
import CustomBarChart from "../layout/CustomBarChart";
import SalartHotChart from "../layout/SalaryHotChart";
import SalaryChart from "../layout/SalaryChart";
import IndustryChart from "../layout/IndustryChart";
import ChineseMapChart from "../layout/ChineseMapChart";
import RouteSelector from '../layout/RouteSelector'

export default class Main extends React.Component {
    render() {
        return <div className='app'>
            <div className="contianer">
                <RouteSelector />
                <div className="header">

                    猎聘岗位数据分析可视化
                </div>
                <div className="content">
                    <div className="content-left">
                        <div className="chartOne">
                            <SalartHotChart />
                        </div>
                        <div className="chartTwo">
                            <SalaryChart />
                        </div>
                    </div>
                    <div className="content-center">
                        <div className="chartThree">
                            <ChineseMapChart />
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="chartFour">
                            <IndustryChart />
                        </div>
                        <div className="chartFive"></div>
                    </div>
                </div>
                <div className="footer">
                    <div className="chartSix">
                        <CustomChart />
                    </div>
                    <div className="chartSeven">
                        <CustomBarChart />
                    </div>
                </div>
            </div>
        </div>
    }
}