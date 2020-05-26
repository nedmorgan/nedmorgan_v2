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
            class='fas fa-times close-icon'
          ></i>
          <h1>About</h1>
          <p>
            Most people know me as a cyclist. I'm on my bike most every chance I
            have. Others know me as a bearded backpacker trying to navigate a
            bus schedule. My family knows me as an outgoing and socialable man
            who loves being with family and friends. My dogs know me as Dad and
            the keeper of the treats. All of these are true and all have a
            special place in my heart where I can express a piece of my
            personality. My life has taken many twists and turns, with most of
            them unanticipated. I'm lucky that each turn has taught me a great
            deal about myself and I've been able to teach others along the way
            as well.
          </p>
          <p>
            My passion for programming was sparked when I was able to witness
            its power to create. After my wife and I were married we decided
            that we wanted to explore the world and take a risk. We embarked on
            a 10-month, multi-country journey through South East Asia. To make
            sure our family knew we were safe, I made a website for us to
            document our trip. I loved being able to share information quickly
            and explore a creative side that I didn’t know was there. I find a
            lot of enjoyment working through challenges, creating elegant
            designs, and exploring avenues to continue to learn. My idea of
            success has greatly shifted to one that prioritizes my mental state
            before material or social gain.
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
