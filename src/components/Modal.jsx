import React, { Component } from 'react'
import { ModalContainer } from '../styles/ModalStyles'

const ModalBox = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <button className='close-button' onClick={handleClose}>
          <i onClick={handleClose} class='fas fa-times-circle'></i>
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
