import React, { Component } from 'react'
import { PortfolioContainer } from '../styles/PortfolioStyles'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import radTrails from './assets/radtrails.png'
import vago from './assets/vago_app.png'
import weather from './assets/myWeather.png'

const portfolioSlides = [
  {
    title: 'radTrails',
    url: 'https://rad-trails.herokuapp.com/',
    image: radTrails,
  },
  {
    title: 'Vago',
    url: 'https://vago-travel.herokuapp.com/',
    image: vago,
  },
  {
    title: 'myWe@ther',
    url: 'http://www.myweather.xyz/',
    image: weather,
  },
]

export default class Portfolio extends Component {
  render() {
    return (
      <PortfolioContainer>
        {this.props.displayPortfolio ? (
          <div>
            <i
              onClick={(e) => this.props.togglePortfolio(e)}
              className='far fa-times-circle close-icon'
            ></i>
          </div>
        ) : null}
        {this.props.displayPortfolio ? (
          <Carousel className='carousel-container'>
            {portfolioSlides.map((slide, i) => {
              return (
                <div key={i} className='slide-container'>
                  <img src={slide.image} alt={slide.title} />
                  <div className='link-content'>
                    <div className='text'>
                      <a
                        className='web-link'
                        href={slide.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        tabIndex={i}
                        title={slide.title}
                      >
                        Visit!
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </Carousel>
        ) : null}
      </PortfolioContainer>
    )
  }
}
