import React, { Component } from 'react'
import './App.css'
import NavBar from '../src/components/NavBar'
import Logo from '../src/components/Logo'
import Social from '../src/components/Social'
import Modal from '../src/components/Modal'
import About from '../src/components/About'
import Portfolio from '../src/components/Portfolio'

const isMobile = window.innerWidth < 600

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displaySocial: false,
      activeNav: false,
      displayModal: false,
      displayAbout: false,
      displayEmailIcon: true,
      displayPortfolio: false,
      validEmail: false,
      isMobile: false,
      hideLogo: false,
      contact: { name: '', email: '', comment: '' },
    }
  }

  componentDidMount = () => {
    this.setState((state, props) => {
      return { isMobile: isMobile }
    })
  }

  checkLogo = () => {
    let aboutActive = this.state.displayAbout
    let portfolioActive = this.state.displayPortfolio
    let hide = this.state.hideLogo
    if (aboutActive === true || portfolioActive === true) {
      hide = true
      this.setState((state, props) => {
        return { hideLogo: hide }
      })
    } else {
      hide = false
      this.setState((state, props) => {
        return { hideLogo: hide }
      })
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
      return { displaySocial: !state.displaySocial, activeNav: false }
    })
  }

  togglePortfolio = (e) => {
    e.preventDefault()
    this.setState((state, props) => {
      return {
        displayPortfolio: !state.displayPortfolio,
        displayAbout: false,
        displayModal: false,
        activeNav: false,
      }
    })
    const timer = setTimeout(() => {
      this.checkLogo()
    }, 10)
    return () => clearTimeout(timer)
  }

  toggleAbout = (e) => {
    e.preventDefault()
    if (isMobile === true) {
      this.setState((state, props) => {
        return {
          displayAbout: !state.displayAbout,
          hideLogo: true,
          displayModal: false,
          displayPortfolio: false,
          activeNav: false,
        }
      })
      const timer = setTimeout(() => {
        this.checkLogo()
      }, 10)
      return () => clearTimeout(timer)
    } else {
      this.setState((state, props) => {
        return {
          displayAbout: !state.displayAbout,
          displayPortfolio: false,
        }
      })
      const timer = setTimeout(() => {
        this.checkLogo()
      }, 10)
      return () => clearTimeout(timer)
    }
  }

  openModal = (e) => {
    e.preventDefault()
    this.setState((state, props) => {
      return {
        displayModal: true,
        hideLogo: true,
        displaySocial: false,
        activeNav: false,
      }
    })
  }

  hideModal = (e) => {
    e.preventDefault()
    this.setState({ displayModal: false, hideLogo: false })
    const timer = setTimeout(() => {
      this.checkLogo()
    }, 10)
    return () => clearTimeout(timer)
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
          togglePortfolio={this.togglePortfolio}
          activeNav={this.state.activeNav}
          openModal={this.openModal}
          displayEmailIcon={this.state.displayEmailIcon}
        />
        <Social displaySocial={this.state.displaySocial} />
        <About
          displayAbout={this.state.displayAbout}
          toggleAbout={this.toggleAbout}
          isMobile={this.state.isMobile}
        />
        <Modal
          displayModal={this.state.displayModal}
          handleChange={this.handleChange}
          contact={this.state.contact}
          hideModal={this.hideModal}
          validateEmail={this.validateEmail}
          validEmail={this.state.validEmail}
        />
        <Logo
          displayModal={this.state.displayModal}
          hideLogo={this.state.hideLogo}
        />
        <Portfolio
          displayPortfolio={this.state.displayPortfolio}
          togglePortfolio={this.togglePortfolio}
        />
      </div>
    )
  }
}
