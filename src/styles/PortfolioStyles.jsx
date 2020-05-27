import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const PortfolioContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 2em;
  animation: 1s ${fade};

  .carousel {
    width: 50vw !important;
    opacity: 0.7 !important;
    margin: 0 auto;
  }

  .carousel-status {
    display: none;
  }

  .thumbs-wrapper {
    display: none;
  }

  .control-arrow {
    color: whitesmoke !important;
  }

  .slider-wrapper {
    width: 50% !important;
  }

  img {
    min-width: 100%;
  }

  ul.control-dots {
    padding-left: 0 !important;
  }
`
