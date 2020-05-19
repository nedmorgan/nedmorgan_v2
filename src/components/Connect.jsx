import React, { Component } from 'react'
import { ConnectContainer } from '../styles/ConnectStyles'

export default class Connect extends Component {
  render() {
    return (
      <ConnectContainer>
        <i
          onClick={(e) => this.props.openModal(e)}
          className={
            this.props.displayEmailIcon
              ? 'far fa-envelope connect-icon'
              : 'inactive-email'
          }
        ></i>
      </ConnectContainer>
    )
  }
}
