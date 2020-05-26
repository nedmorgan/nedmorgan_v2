import React, { Component } from 'react'
import './App.css'
import NavBar from '../src/components/NavBar'
import Logo from '../src/components/Logo'
import Social from '../src/components/Social'
import Modal from '../src/components/Modal'
import About from '../src/components/About'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displaySocial: false,
      activeNav: false,
      displayModal: false,
      displayAbout: false,
      displayEmailIcon: true,
      validEmail: false,
      contact: { name: '', email: '', comment: '' },
    }
  }

  toggleNav = (e) => {
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

  toggleAbout = (e) => {
    e.preventDefault()
    this.setState((state, props) => {
      return {
        displayAbout: !state.displayAbout,
        displayEmailIcon: !state.displayEmailIcon,
      }
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
          toggleAbout={this.toggleAbout}
          toggleNav={this.toggleNav}
          activeNav={this.state.activeNav}
          openModal={this.openModal}
          displayEmailIcon={this.state.displayEmailIcon}
        />
        <Social displaySocial={this.state.displaySocial} />
        <About displayAbout={this.state.displayAbout} />
        <Modal
          displayModal={this.state.displayModal}
          handleChange={this.handleChange}
          contact={this.state.contact}
          hideModal={this.hideModal}
          validateEmail={this.validateEmail}
          validEmail={this.state.validEmail}
        />
        <Logo displayModal={this.state.displayModal} />
      </div>
    )
  }
}
