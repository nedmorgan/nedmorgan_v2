import React, { Component } from 'react'
import { PortfolioContainer } from '../styles/PortfolioStyles'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import radTrails from './assets/radtrails.png'
import vago from './assets/vago_app.png'
import weather from './assets/myWeather.png'
import simon from './assets/simon_game.png'

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
  {
    title: 'Simon',
    url: 'https://simon-game-nmorgan.netlify.app/',
    image: simon,
  },
]

export default class Portfolio extends Component {
  render() {
    return (
      <PortfolioContainer>
        {this.props.displayPortfolio ? (
          <Carousel className='carousel-container'>
            {portfolioSlides.map((slide, i) => {
              return (
                <div key={i} className='slide-container'>
                  <img src={slide.image} alt={slide.title} />
                </div>
              )
            })}
          </Carousel>
        ) : null}
      </PortfolioContainer>
    )
  }
}
