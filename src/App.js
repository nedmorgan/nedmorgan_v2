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
      emailSuccess: false,
      isMobile: false,
      hideLogo: false,
      contact: { name: '', email: '', comment: '' },
    }
  }

  // Checking is user is in a mobile device
  componentDidMount = () => {
    this.setState((state, props) => {
      return { isMobile: isMobile }
    })
  }

  // Function to check is the logo needs to be displayed
  checkLogo = () => {
    let aboutActive = this.state.displayAbout
    let portfolioActive = this.state.displayPortfolio
    let hide = this.state.hideLogo
    if (!isMobile && aboutActive === true) {
      hide = false
      this.setState((state, props) => {
        return { hideLogo: hide }
      })
    } else if (aboutActive === true || portfolioActive === true) {
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

  // Function to toggle the nav bar
  toggleNav = (e) => {
    e.preventDefault()
    this.setState((state, props) => {
      return { activeNav: !state.activeNav, displaySocial: false }
    })
  }

  // Function to toggle the Connect component
  toggleConnect = (e) => {
    e.preventDefault()
    this.setState((state, props) => {
      return { displaySocial: !state.displaySocial, activeNav: false }
    })
  }

  // Function to toggle the Portfolio carousel
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
    }, 20)
    return () => clearTimeout(timer)
  }

  // Function to toggle the About component
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
      }, 20)
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
      }, 20)
      return () => clearTimeout(timer)
    }
  }

  // Function to open the email modal
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

  // Function to hide the modal
  hideModal = (e) => {
    e.preventDefault()
    this.setState({ displayModal: false, hideLogo: false, emailSuccess: false })
    const timer = setTimeout(() => {
      this.checkLogo()
    }, 20)
    return () => clearTimeout(timer)
  }

  // Handle change function for the email contact form
  handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    const updatedContact = { ...this.state.contact }
    updatedContact[name] = value
    this.setState({ contact: updatedContact })
  }

  // Clearing state after an e-mail has been sucessfully sent
  clearEmailState = (success) => {
    let contactInfo = this.state.contact
    contactInfo = {}
    this.setState((state, props) => {
      return { contact: contactInfo, emailSuccess: success }
    })
  }

  // Function to validate an email address
  validateEmail = (e, email) => {
    e.preventDefault()
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let validEmail = regEx.test(String(email).toLowerCase())
    if (!validEmail) {
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
          hideModal={this.hideModal}
          clearEmailState={this.clearEmailState}
          emailSuccess={this.state.emailSuccess}
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
