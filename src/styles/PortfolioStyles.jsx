import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const PortfolioContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 5%;
  display: flex;
  flex-direction: column;

  .carousel-container {
    animation: 1s ${fade};
  }

  .carousel {
    width: 60vw !important;
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
    width: 100% !important;
  }

  img {
    max-width: 100%;
  }

  ul.control-dots {
    padding-left: 0 !important;
  }

  .link-content {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    color: #1c87c9;
    background-color: rgba(200, 200, 200, 0.5);
    width: 100%;
    height: 100%;
    -webkit-transition: all 800ms ease-out;
    -moz-transition: all 800ms ease-out;
    -o-transition: all 800ms ease-out;
    -ms-transition: all 800ms ease-out;
    transition: all 800ms ease-out;
    text-align: center;
    padding-bottom: 5vh;
  }

  .slide-container .link-content:hover {
    opacity: 1;
  }

  .slide-container .link-content .text {
    height: 0;
    opacity: 1;
    transition-delay: 0s;
    transition-duration: 0.8s;
  }

  .slide-container .link-content:hover .text {
    opacity: 1;
    transform: translateY(150px);
    -webkit-transform: translateY(150px);
  }

  .web-link {
    font-size: 2em;
    color: black;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
  }

  .web-link:hover {
    text-decoration: underline;
    font-weight: bold;
  }

  .close-icon {
    color: whitesmoke;
    font-size: 2em;
    float: right;
    padding-right: 4em;
  }

  .close-icon:hover {
    cursor: pointer;
  }

  .invisible {
    display: none;
  }

  @media (min-width: 601px) and (max-width: 770px) {
    padding-bottom: 60%;

    .slider-wrapper {
      width: 100% !important;
    }

    .carousel {
      width: 80vw !important;
    }

    .close-icon {
      padding-right: 1em;
      padding-bottom: 0.5em;
      font-size: 2.25em;
    }
  }

  @media (min-width: 371px) and (max-width: 600px) {
    padding-bottom: 60%;

    .slider-wrapper {
      width: 100% !important;
    }

    .close-icon {
      padding-right: 1.25em;
      padding-bottom: 0.5em;
      font-size: 1.5em;
    }

    .carousel {
      width: 75vw !important;
    }

    .web-link {
      font-size: 1.25em;
    }

    .slide-container .link-content:hover .text {
      opacity: 1;
      transform: translateY(70px);
      -webkit-transform: translateY(70px);
    }
  }

  @media screen and (max-width: 370px) {
    padding-bottom: 55%;

    .slider-wrapper {
      width: 100% !important;
    }

    .close-icon {
      padding-right: 1.25em;
      padding-bottom: 0.5em;
      font-size: 1.5em;
    }

    .carousel {
      width: 75vw !important;
    }

    .web-link {
      font-size: 1.25em;
    }

    .slide-container .link-content:hover .text {
      opacity: 1;
      transform: translateY(70px);
      -webkit-transform: translateY(70px);
    }
  }
`
