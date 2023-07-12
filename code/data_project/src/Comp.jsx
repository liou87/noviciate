import React, { Component } from 'react';
import debounce from 'lodash.debounce'
import s from './css/index.scss'

class Comp extends Component {
  constructor(p) {
    super(p)
    this.state = {
      scale: this.getScale()
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.setScale)
  }　　//得到呈现的屏幕宽高比

  getScale = () => {
    const { width = 1920, height = 1080 } = this.props
    let ww = window.innerWidth / width
    let wh = window.innerHeight / height
    return ww < wh ? ww : wh
  }

  setScale = debounce(() => {
    let scale = this.getScale()
    this.setState({ scale })
  }, 500)

  render() {
    const { width = 1920, height = 1080, children } = this.props
    const { scale } = this.state
    return (
      <div
        className={s['scale-box']}
        style={{
          transform: `scale(${scale}) translate(-50%, -50%)`,
          WebkitTransform: `scale(${scale}) translate(-50%, -50%)`,
          width,
          height
        }}
      >
        {children}
      </div>
    )
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setScale)
  }
}

export default Comp


// //数据大屏自适应函数
// const handleScreenAuto = () => {
//   const designDraftWidth = 1920;//设计稿的宽度
//   const designDraftHeight = 960;//设计稿的高度
//   //根据屏幕的变化适配的比例
//   const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight ?
//       (document.documentElement.clientWidth / designDraftWidth) :
//       (document.documentElement.clientHeight / designDraftHeight);
//   //缩放比例
//   (document.querySelector('#screen') as any).style.transform = `scale(${scale}) translate(-50%)`;
// }

// //React的生命周期 如果你是vue可以放到mountd或created中
// useEffect(() => {
//   //初始化自适应  ----在刚显示的时候就开始适配一次
//   handleScreenAuto();
//   //绑定自适应函数   ---防止浏览器栏变化后不再适配
//   window.onresize = () => handleScreenAuto();
//   //退出大屏后自适应消失   ---这是react的组件销毁生命周期，如果你是vue则写在deleted中。最好在退出大屏的时候接触自适应
//   return () => window.onresize = null;
// }, [])

