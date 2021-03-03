import React, { Component } from 'react'
import { PortfolioContainer } from '../styles/PortfolioStyles'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const portfolioSlides = [
  {
    title: 'radTrails',
    url: 'https://rad-trails.herokuapp.com/',
    image: 'https://nedmorgan-static.s3.us-east-2.amazonaws.com/radtrails.png',
  },
  {
    title: 'Quarantine BINGO',
    url: 'https://quarantinebingo.netlify.app/',
    image: 'https://nedmorgan-static.s3.us-east-2.amazonaws.com/quaratine_bingo.png',
  },
  {
    title: 'myWe@ther',
    url: 'http://www.myweather.xyz/',
    image: 'https://nedmorgan-static.s3.us-east-2.amazonaws.com/myWeather.png',
  },
]

export default class Portfolio extends Component {
  render() {
    return (
      <PortfolioContainer>
        {this.props.displayPortfolio ? (
          <div>
            <i onClick={(e) => this.props.togglePortfolio(e)} className='far fa-times-circle close-icon'></i>
          </div>
        ) : (
          <div className='invisible'></div>
        )}
        {this.props.displayPortfolio ? (
          <Carousel className='carousel-container'>
            {portfolioSlides.map((slide, i) => {
              return (
                <div key={i} className='slide-container'>
                  <img src={slide.image} alt={slide.title} />
                  <div className='link-content'>
                    <div className='text'>
                      <a className='web-link' href={slide.url} target='_blank' rel='noopener noreferrer' tabIndex={i} title={slide.title}>
                        Visit!
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </Carousel>
        ) : (
          <div className='invisible'></div>
        )}
      </PortfolioContainer>
    )
  }
}
