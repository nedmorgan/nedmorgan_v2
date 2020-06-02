import React, { Component } from 'react'
import { ModalContainer } from '../styles/ModalStyles'
require('dotenv').config()
const axios = require('axios')

// API Endpoint
const api_endpoint = process.env.REACT_APP_API_ENDPOINT

const ModalBox = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <button className='close-button' onClick={handleClose}>
          <i onClick={handleClose} className='fas fa-times-circle'></i>
        </button>
        {children}
      </section>
    </div>
  )
}

export default class Modal extends Component {
  // Function to send email
  sendMail = (e) => {
    e.preventDefault()
    let didEmailSucceed = this.props.emailSuccess
    let subjectData = `${this.props.contact.name} (${this.props.contact.email}) is Reaching Out from your website!`
    let messageData = this.props.contact.comment
    console.log(`API URL: ${api_endpoint}`)
    axios
      .post(`${api_endpoint}`, {
        subject: subjectData,
        message: messageData,
      })
      .then((res) => {
        console.log(`Response: ${res}`)
        didEmailSucceed = true
        this.props.clearEmailState(didEmailSucceed)
        const timer = setTimeout(() => {
          this.props.hideModal()
        }, 1500)
        return () => clearTimeout(timer)
      })
      .catch((error) => {
        console.log(`Error: ${error}`)
      })
  }

  render() {
    return (
      <ModalContainer>
        <main>
          <ModalBox
            show={this.props.displayModal}
            handleClose={this.props.hideModal}
          >
            <h1>Let's Connect!</h1>
            <form>
              <label className='form-labels'>
                Name:
                <input
                  onChange={this.props.handleChange}
                  value={this.props.contact.name}
                  className='form-inputs'
                  type='text'
                  name='name'
                />
              </label>
              <label className='form-labels'>
                E-mail:
                <input
                  onChange={this.props.handleChange}
                  value={this.props.contact.email}
                  className='form-inputs'
                  type='text'
                  name='email'
                  onBlur={(e) =>
                    this.props.validateEmail(e, this.props.contact.email)
                  }
                />
              </label>
              <label className='form-labels'>
                Message:
                <textarea
                  onChange={this.props.handleChange}
                  value={this.props.contact.comment}
                  className='comment-box'
                  type='text'
                  name='comment'
                  rows='5'
                />
              </label>
              <button
                className={
                  this.props.validEmail
                    ? 'visible-button submit-button'
                    : 'invisible-button submit-button'
                }
                type='submit'
                onClick={(e) => this.sendMail(e)}
              >
                Submit
              </button>
            </form>
          </ModalBox>
        </main>
      </ModalContainer>
    )
  }
}
