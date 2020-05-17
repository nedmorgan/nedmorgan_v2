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
      validEmail: false,
      contact: { name: '', email: '', comment: '' },
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

  handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    const updatedContact = { ...this.state.contact }
    updatedContact[name] = value
    this.setState({ contact: updatedContact })
  }

  validateEmail = (e, email) => {
    e.preventDefault()
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let validEmail = regEx.test(String(email).toLowerCase())
    if (validEmail === false) {
      this.setState({ validEmail: false })
    } else {
      this.setState({ validEmail: true })
    }
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
          handleChange={this.handleChange}
          contact={this.state.contact}
          hideModal={this.hideModal}
          validateEmail={this.validateEmail}
          validEmail={this.state.validEmail}
        />
        <Logo />
      </div>
    )
  }
}
