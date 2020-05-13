import React, { Component } from 'react'
import { NavContainer } from '../styles/NavBarStyles'

const MENU = ['About', 'Portfolio', 'Contact']

export default class NavBar extends Component {
  state = {
    activeNav: false,
  }

  toggleNavBar = (e) => {
    e.preventDefault()
    this.setState((state, props) => {
      return { activeNav: !state.activeNav }
    })
  }

  render() {
    return (
      <NavContainer className='navigation'>
        <a className='icon-link'>
          <i
            onClick={(e) => this.toggleNavBar(e)}
            className='fas fa-bars icon'
          ></i>
        </a>
        <div className={this.state.activeNav ? 'active-nav' : 'inactive-nav'}>
          {MENU.map((nav, i) => {
            return (
              <a
                className={this.state.activeNav ? 'nav-link-drop' : 'nav-link'}
                key={i}
                id={`topnav${i}`}
              >
                {nav}
              </a>
            )
          })}
        </div>
      </NavContainer>
    )
  }
}
