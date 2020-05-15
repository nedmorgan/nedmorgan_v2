import React, { Component } from 'react'
import './App.css'
import NavBar from '../src/components/NavBar'
import Logo from '../src/components/Logo'
import Social from '../src/components/Social'
import Connect from '../src/components/Connect'
import Modal from '../src/components/Modal'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displaySocial: false,
      activeNav: false,
      displayModal: true,
    }
  }

  toggleNavBar = (e) => {
    e.preventDefault()
    this.setState((state, props) => {
      return { activeNav: !state.activeNav, displaySocial: false }
    })
  }

  openModal = (e) => {
    e.preventDefault()
    this.setState((state, props) => {
      return {
        displayModal: true,
        displaySocial: false,
        activeNav: false,
      }
    })
  }

  hideModal = (e) => {
    e.preventDefault()
    this.setState({ displayModal: false })
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
        <Connect openModal={this.openModal} />
        <Modal
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
        />
        <Logo />
      </div>
    )
  }
}
