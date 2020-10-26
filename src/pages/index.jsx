import React from 'react'
import './index.css'
import './font-awesome.min.css'
import i18n from '../i18n'
class Home extends React.Component {
  constructor(props) {
    super(props)
    // 构造函数是唯一可以给 this.state 赋值的地方
    this.state = {
      language: localStorage.getItem('lang') || 'zh_hk',
      display: true,
      smallMenuDisplay: false
    }
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.changeLanguage = this.changeLanguage.bind(this)
    this.showMenu = this.showMenu.bind(this)
    this.scrollToAnchor = this.scrollToAnchor.bind(this)
  }
  changeLanguage() {
    if (this.state.language === 'zh_hk') {
      localStorage.setItem('lang', 'en')
    } else {
      localStorage.setItem('lang', 'zh_hk')
    }
    this.setState({ smallMenuDisplay: false })
    window.location.reload()
  }
  // this.setState() 来时刻更新组件 state：
  // 在组件已经被渲染到 DOM 中后运行 componentDidMount()
  // 一旦 Clock 组件从 DOM 中被移除，React 就会调用 componentWillUnmount() 生命周期方法，
  // 組件掛載時
  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this))
    this.handleResize()
  }
  // 監聽窗口大小變化
  handleResize() {
    if (document.documentElement.offsetWidth <= 800) {
      this.setState({ display: false })
    } else {
      this.setState({ display: true })
    }
  }
  // 小菜單欄的顯示與隱藏
  showMenu() {
    if (this.state.smallMenuDisplay) {
      this.setState({ smallMenuDisplay: false })
    } else {
      this.setState({ smallMenuDisplay: true })
    }
  }
  // 滾動到指定位置
  scrollToAnchor(anchorName) {
    this.setState({
      smallMenuDisplay: false
    })
    let anchorElement = document.getElementById(anchorName)
    let data = window.pageYOffset > anchorElement.offsetTop ? -50 : +50
    let speed = window.pageYOffset
    let timer = null
    timer = setInterval(() => {
      const val = anchorElement.offsetTop - window.pageYOffset
      data = Math.abs(data) > Math.abs(val) ? val : data
      speed += data
      window.scrollTo(0, speed)
      if (data > 0) {
        if (speed >= anchorElement.offsetTop) {
          if (anchorName === 'first') {
            window.scrollTo(0, 0)
          }
          clearInterval(timer)
        }
      } else {
        if (speed <= anchorElement.offsetTop) {
          if (anchorName === 'first') {
            window.scrollTo(0, 0)
          }
          clearInterval(timer)
        }
      }
    }, 20)
    // if (anchorName) {
    //   let anchorElement = document.getElementById(anchorName)
    //   if (anchorElement) {
    //     // scrollIntoView()让当前的元素滚动到浏览器窗口的可视区域内==>safari不支持behavior:'smooth'
    //     anchorElement.scrollIntoView({
    //       block: 'end',
    //       behavior: 'smooth'
    //     })
    //     this.setState({
    //       smallMenuDisplay: false
    //     })
    //   }
    // }
  }
  render() {
    return (
      <div className='container-box'>
        {/* 導航欄 */}
        <header className='header'>
          <div className='h-con'>
            <div className='l-con'>
              <img src={require('../assets/img/logo.png')} alt='' />
              <div className='name'>{i18n.t('firm')}</div>
            </div>
            {/* 大菜單 */}
            <ul className={this.state.display ? 'r-con' : 'hide'}>
              <li
                className='r-item'
                onClick={() => this.scrollToAnchor('first')}
              >
                {i18n.t('home')}
              </li>
              <li
                className='r-item'
                onClick={() => this.scrollToAnchor('third')}
              >
                {i18n.t('contact')}
              </li>
              <li className='r-item' onClick={this.changeLanguage}>
                {this.state.language === 'zh_hk' ? 'En' : '中文'}
              </li>
            </ul>
          </div>
        </header>
        {/* 小菜單 */}
        <div
          className={!this.state.display ? 'small-menu' : 'hide'}
          onClick={this.showMenu}
        >
          <span
            className={!this.state.smallMenuDisplay ? 'fa fa-bars' : 'hide'}
          ></span>
          <span
            className={this.state.smallMenuDisplay ? 'fa fa-times' : 'hide'}
          ></span>
        </div>
        {/* 首頁 */}
        <div className='first' id='first'>
          <div className='f-con'>
            <img src={require('../assets/img/web.jpg')} alt='' />
          </div>
        </div>
        {/* 第二頁 */}
        <div className='second'>
          <div className='top'>
            <div className='con'>
              <div className='l-con'>
                <h1 className='t-title'>{i18n.t('f1')}</h1>
                <div className='line'></div>
                <div className='b-desc'>{i18n.t('f2')}</div>
              </div>
              <div className='r-con'>
                <img src={require('../assets/img/web-a.jpg')} alt='' />
              </div>
            </div>
          </div>
          <div className='middle'>
            <div className='con'>
              <h1 className='t-title'>{i18n.t('f3')}</h1>
              <div className='line'></div>
              <div className='b-desc'>{i18n.t('f4')}</div>
            </div>
          </div>
          <div className='bottom'>
            <div className='con'>
              <div className='left-con'>
                <img src={require('../assets/img/web-b.png')} alt='' />
              </div>
              <div className='right-con'>
                <div>
                  <h1>{i18n.t('f5')}</h1>
                  <h2>{i18n.t('f6')}</h2>
                  <p>{i18n.t('f7')}</p>
                  <h1>{i18n.t('f8')}</h1>
                  <p>{i18n.t('f9')}</p>
                  <h1>{i18n.t('f10')}</h1>
                  <p>{i18n.t('f11')}</p>
                  <h1>{i18n.t('f12')}</h1>
                  <h2>{i18n.t('f13')}</h2>
                  <p>{i18n.t('f14')}</p>
                  <p>{i18n.t('f15')}</p>
                  <p>{i18n.t('f16')}</p>
                  <h2>{i18n.t('f17')}</h2>
                  <p>{i18n.t('f18')}</p>
                  <p>{i18n.t('f19')}</p>
                  <p>{i18n.t('f20')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 第三頁 */}
        <div className='third' id='third'>
          <div className='t-con'>
            <div className='phone'>
              <span className='fa fa-phone-square fa-fw icon'></span>
              <span>+(852) 5162 &nbsp;6563</span>
            </div>
            <div className='phone'>
              <span className='fa fa-envelope fa-fw icon'></span>
              <a href='mailto:askme@hkorginal.com'>askme@hkorginal.com</a>
              {/* <span>askme@hkorginal.com</span> */}
            </div>
            {/* <div className='phone'>
              <span className='fa fa-map-marker fa-fw icon'></span>
            </div> */}
            <div>{i18n.t('f21')}</div>
          </div>
        </div>
        {/* 底部 */}
        <div className='footer'>
          <div className='f-con'>
            Copyright © 2019 Hong Kong Orginal Design & Consulting Limited. All
            rights reserved.
          </div>
        </div>
        {/* 小菜單欄 */}
        <div
          className={this.state.smallMenuDisplay ? 'hide-box' : 'hide'}
          onClick={() => this.setState({ smallMenuDisplay: false })}
        ></div>
        <div className={this.state.smallMenuDisplay ? 'nav' : 'hide1'}>
          <ul>
            <li className='r-item' onClick={() => this.scrollToAnchor('first')}>
              {i18n.t('home')}
            </li>
            <li className='r-item' onClick={() => this.scrollToAnchor('third')}>
              {i18n.t('contact')}
            </li>
            <li className='r-item' onClick={this.changeLanguage}>
              {this.state.language === 'zh_hk' ? 'En' : '中文'}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
