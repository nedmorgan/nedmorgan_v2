import React, { Component } from 'react'
import { SocialContainer } from '../styles/SocialStyles'

export default class Social extends Component {
  render() {
    return (
      <SocialContainer>
        <div
          className={
            this.props.displaySocial ? `active-social` : `inactive-social`
          }
        >
          <a
            href='https://www.linkedin.com/in/nathanielpmorgan/'
            tabindex='1'
            title='Linkedin link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='social-icon fab fa-linkedin-in'></i>
          </a>
          <a
            href='https://www.instagram.com/ned_morgan/?hl=en'
            tabindex='2'
            title='Instagram link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='social-icon fab fa-instagram-square'></i>
          </a>
          <a
            href='https://drive.google.com/open?id=12WrvcXmG9jhVdDnCzwlwimdJsCO_MKoN'
            tabindex='3'
            title='Resume link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='social-icon fas fa-file'></i>
          </a>
        </div>
      </SocialContainer>
    )
  }
}
