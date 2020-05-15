import React, { Component } from 'react'
import { ModalContainer } from '../styles/ModalStyles'

const ModalBox = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button onClick={handleClose}>close</button>
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
            <p>Modal</p>
            <p>Data</p>
          </ModalBox>
        </main>
      </ModalContainer>
    )
  }
}
