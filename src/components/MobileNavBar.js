import React, { Component } from 'react'
import { Link } from 'react-router'
import Sticky from 'react-sticky'
import { slide as Menu } from 'react-burger-menu'

// require('react-burger-menu').slide

if (process.env.BROWSER) {
  require('./NavBar.css')
  require('./NavBurg.css')
}

export default class MobileNaviBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let backgroundColor = '#FFF'
    let logo = '/asset/logo.png'
    if (this.props.bgStyle === 'dark') {
      backgroundColor = '#000'
      logo = 'asset/logo_dark.png'
    }

    return (
      <Sticky topOffset={80}>
        <div style= {{ backgroundColor: backgroundColor }}>
          <div className="nav-logo">
            <Link to="/"><img src={logo} height="50px" width="auto" /></Link>
          </div>
          <Menu right>
            <Link to="/"><span>首頁</span></Link>
            <Link to="/category/taiwan"><span>台灣</span></Link>
            <Link to="/category/review"><span>觀點</span></Link>
            <Link to="/photography"><span>影像</span></Link>
            <Link to="/category/media"><span>新媒體</span></Link>
          </Menu>
        </div>
      </Sticky>
    )
  }
}
