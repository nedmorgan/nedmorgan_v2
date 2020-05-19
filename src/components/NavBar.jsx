import React, { Component } from 'react'
import { NavContainer } from '../styles/NavBarStyles'

const MENU = [
  { title: 'About', id: 1 },
  { title: 'Portfolio', id: 2 },
  { title: 'Connect', id: 3 },
]

export default class NavBar extends Component {
  render() {
    return (
      <NavContainer className='navigation'>
        <button className='icon-link'>
          <i
            onClick={(e) => this.props.toggleNavBar(e)}
            className='fas fa-bars icon'
          ></i>
        </button>
        <div className={this.props.activeNav ? 'active-nav' : 'inactive-nav'}>
          <button
            className={this.props.activeNav ? 'nav-link-drop' : 'nav-link'}
            id={`topnav${MENU[0].id}`}
            onClick={(e) => this.props.toggleAbout(e)}
          >
            {MENU[0].title}
          </button>
          <button
            className={this.props.activeNav ? 'nav-link-drop' : 'nav-link'}
            id={`topnav${MENU[1].id}`}
          >
            {MENU[1].title}
          </button>
          <button
            className={this.props.activeNav ? 'nav-link-drop' : 'nav-link'}
            id={`topnav${MENU[2].id}`}
            onClick={(e) => this.props.toggleConnect(e)}
          >
            {MENU[2].title}
          </button>
        </div>
      </NavContainer>
    )
  }
}
