import React, { Component } from 'react'
import { NavContainer } from '../styles/NavBarStyles'

const MENU = [
  { title: 'About', id: 1 },
  { title: 'Portfolio', id: 2 },
  { title: 'Contact', id: 3 },
  { title: 'Connect', id: 4 },
]

export default class NavBar extends Component {
  render() {
    return (
      <NavContainer className='navigation'>
        <a className='icon-link'>
          <i
            onClick={(e) => this.props.toggleNavBar(e)}
            className='fas fa-bars icon'
          ></i>
        </a>
        <div className={this.props.activeNav ? 'active-nav' : 'inactive-nav'}>
          <a
            className={this.props.activeNav ? 'nav-link-drop' : 'nav-link'}
            id={`topnav${MENU[0].id}`}
          >
            {MENU[0].title}
          </a>
          <a
            className={this.props.activeNav ? 'nav-link-drop' : 'nav-link'}
            id={`topnav${MENU[1].id}`}
          >
            {MENU[1].title}
          </a>
          <a
            className={this.props.activeNav ? 'nav-link-drop' : 'nav-link'}
            id={`topnav${MENU[2].id}`}
          >
            {MENU[2].title}
          </a>
          <a
            className={this.props.activeNav ? 'nav-link-drop' : 'nav-link'}
            id={`topnav${MENU[3].id}`}
            onClick={(e) => this.props.toggleConnect(e)}
          >
            {MENU[3].title}
          </a>
        </div>
      </NavContainer>
    )
  }
}
