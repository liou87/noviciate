import { api } from '../api/base';
import { useEffect, useState } from 'react';
import PChart from '../components/PChart'


const IndustryChart = (props) => {
    const [displayData, setDisplayData] = useState({
        industryNum: [],
        industryName: []
    });

    const dataLine = async (url) => {
        const res = await api(url);
        console.log(res)
        const _displayData = res.reduce(
            (pre, cur) => {
                pre.industryName.push(cur.industry);
                pre.industryNum.push(cur.cnt);
                return pre;
            },
            {
                industryNum: [],
                industryName: []
            },
        );
        setDisplayData(_displayData);
    };

    useEffect(() => {
        dataLine("/industry_info")
    }, []);

    return (
        // <PChart />
        <PChart
            seriesData={displayData.industryNum}
            seriesName={displayData.industryName}
        />
    )
}

export default IndustryChart