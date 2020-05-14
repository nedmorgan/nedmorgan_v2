import React, { Component } from 'react'
import './App.css'
import NavBar from '../src/components/NavBar'
import Logo from '../src/components/Logo'
import Social from '../src/components/Social'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displaySocial: false,
      activeNav: false,
    }
  }

  toggleNavBar = (e) => {
    e.preventDefault()
    this.setState((state, props) => {
      return { activeNav: !state.activeNav, displaySocial: false }
    })
  }

  toggleConnect = (e) => {
    e.preventDefault()
    this.setState((state, props) => {
      return { displaySocial: !state.displaySocial }
    })
  }

  render() {
    return (
      <div className='App'>
        <NavBar
          toggleConnect={this.toggleConnect}
          toggleNavBar={this.toggleNavBar}
          activeNav={this.state.activeNav}
        />
        <Social displaySocial={this.state.displaySocial} />
        <Logo />
      </div>
    )
  }
}
