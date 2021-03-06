import React, { Component } from 'react'
import { LogoContainer } from '../styles/LogoStyles'

const LOGO = ['NED', 'MOR', 'GAN']

export default class Logo extends Component {
  render() {
    return (
      <LogoContainer>
        <div
          className={
            this.props.displayModal || this.props.hideLogo
              ? 'hidden'
              : 'content-container'
          }
        >
          {LOGO.map((word, i) => {
            return <p key={i}>{word}</p>
          })}
        </div>
      </LogoContainer>
    )
  }
}
