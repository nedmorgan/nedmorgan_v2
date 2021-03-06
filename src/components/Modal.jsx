import React, { Component } from 'react'
import { ModalContainer } from '../styles/ModalStyles'
require('dotenv').config()

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
              <label htmlFor='name' className='form-labels'>
                <input
                  onChange={this.props.handleChange}
                  value={this.props.contact.name}
                  className='form-inputs'
                  type='text'
                  name='name'
                  placeholder='Name'
                  required
                />
              </label>
              <label htmlFor='email' className='form-labels'>
                <input
                  onChange={this.props.handleChange}
                  value={this.props.contact.email}
                  className='form-inputs'
                  type='text'
                  name='email'
                  placeholder='E-mail'
                  required
                  onBlur={(e) =>
                    this.props.validateEmail(e, this.props.contact.email)
                  }
                />
                <p
                  className={
                    this.props.displayErrorEmailText
                      ? 'visible invalid-email-text'
                      : 'invisible invalid-email-text'
                  }
                >
                  Please enter a valid email address
                </p>
              </label>
              <label htmlFor='comment' className='form-labels'>
                <textarea
                  onChange={this.props.handleChange}
                  value={this.props.contact.comment}
                  className='comment-box'
                  type='text'
                  name='comment'
                  rows='9'
                  placeholder='Message...'
                  required
                />
              </label>
              <div className='button-div'>
                <button
                  className={
                    this.props.isValidEmail
                      ? 'visible submit-button'
                      : 'invisible submit-button'
                  }
                  type='submit'
                  onClick={(e) =>
                    this.props.validateFormContent(
                      e,
                      this.props.contact.name,
                      this.props.contact.comment
                    )
                  }
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
            <div className={`success-div`}>
              <p
                className={
                  this.props.emailSuccess ? `success-text` : `hide-success-text`
                }
              >
                Thanks for your message!
              </p>
              <p
                className={
                  this.props.showInvalidFormText
                    ? 'invalid-form-text'
                    : 'hide-invalid-form-text'
                }
              >
                Please complete all fields of the form
              </p>
            </div>
          </ModalBox>
        </main>
      </ModalContainer>
    )
  }
}
