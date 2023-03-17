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
          <h1>About Me</h1>
          <div className='image-container'>
            <img
              className='headshot'
              src='https://nedmorgan-static.s3.us-east-2.amazonaws.com/ned.jpg'
              alt="Ned's headshot"
            />
          </div>
          <p>
            Most people know me as a cyclist. My family knows me as
            an outgoing and socialable Dad who loves being with family and
            friends. All of these are true and all have a special place in my
            heart. My life has taken many twists and turns, with most of them
            unanticipated. I'm lucky that each turn has taught me a great deal
            about myself and I've been able to teach others along the way as
            well.
          </p>
          <p>
            Software development has provided me with a wonderful outlet to create.
            Over the last several years I've taken a passion in cloud technologies and creating infrastructure. 
            This has provided me a wonderful outlet to create new things daily. I've been specializing in CI/CD creation,
            operations automation/optimization, and creating cloud infrastructure through IaC. I find a lot of
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
