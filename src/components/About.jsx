import React, { Component } from 'react'
import { AboutContainer } from '../styles/AboutStyles'

export default class About extends Component {
  render() {
    return (
      <AboutContainer>
        <div
          className={
            this.props.displayAbout ? `active-about` : `inactive-about`
          }
        >
          <i
            onClick={(e) => this.props.toggleAbout(e)}
            className='fas fa-times close-icon'
          ></i>
          <h1>About</h1>
          <p>
            Most people know me as a cyclist. Others know me as a bearded
            backpacker trying to navigate a bus schedule. My family knows me as
            an outgoing and socialable man who loves being with family and
            friends. All of these are true and all have a special place in my
            heart. My life has taken many twists and turns, with most of them
            unanticipated. I'm lucky that each turn has taught me a great deal
            about myself and I've been able to teach others along the way as
            well.
          </p>
          <p>
            Web development has provided me with a wonderful outlet to create.
            After my wife and I were married we decided that we wanted to
            explore the world and take a risk. We embarked on a 10-month,
            multi-country journey through South East Asia. To make sure our
            family knew we were safe, I made a website for us to document our
            trip. I loved being able to share information quickly and explore a
            creative side that I didn’t know was there. I find a lot of
            enjoyment working through challenges, creating elegant designs, and
            exploring avenues to continue to learn.
          </p>
          <p>
            I'm sure that the path my life is on will take different turns and
            detours. The challenges that life presents makes things interesting
            and exciting. One constant I know I'll have is a life centered on
            creating.
          </p>
        </div>
      </AboutContainer>
    )
  }
}
