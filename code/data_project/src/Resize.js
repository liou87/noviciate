import React from 'react'
import { useEffect } from 'react';
import routes from './routes';

export default function Resize() {
    //数据大屏自适应函数
    const handleScreenAuto = () => {
        const designDraftWidth = 1800;//设计稿的宽度
        const designDraftHeight = 980;//设计稿的高度
        //根据屏幕的变化适配的比例
        const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
            (document.documentElement.clientWidth / designDraftWidth) :
            (document.documentElement.clientHeight / designDraftHeight);
        //缩放比例
        (document.querySelector('#screen')).style.transform = `scale(${scale}) translate(-50%)`;
    }

    //React的生命周期 如果你是vue可以放到mountd或created中
    useEffect(() => {
        //初始化自适应  ----在刚显示的时候就开始适配一次
        handleScreenAuto();
        //绑定自适应函数   ---防止浏览器栏变化后不再适配
        window.onresize = () => handleScreenAuto();
        //退出大屏后自适应消失   ---这是react的组件销毁生命周期，如果你是vue则写在deleted中。最好在退出大屏的时候接触自适应
        return () => window.onresize = null;
    }, [])

    return (
        // <div className='screen' id='screen'>
        //     {routes}
        // </div>
        <div className="screen-wrapper">
            <div className="screen" id="screen">
                {routes}
            </div>
        </div>
    )
}
