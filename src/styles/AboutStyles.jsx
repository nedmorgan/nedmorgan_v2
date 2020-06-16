import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const AboutContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  .active-about {
    position: absolute;
    height: auto;
    width: 30em;
    background-color: whitesmoke;
    opacity: 0.9;
    margin-top: 2em;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    animation: 1s ${fade};
    padding-right: 1em;
    padding-left: 1em;
  }

  .close-icon {
    margin-top: 0.5em;
    float: right;
    font-size: 1.25em;
  }

  .inactive-about {
    position: absolute;
    visibility: hidden;
  }

  .image-container {
    float: left;
    width: 200px;
  }

  .headshot {
    border-radius: 50%;
    width: 197px;
    height: 146px;
  }

  h1 {
    text-align: center;
  }

  h1,
  p {
    margin-bottom: 0;
    font-family: 'Raleway', sans-serif;
  }

  p:last-of-type {
    margin-bottom: 1em;
  }

  @media (min-width: 771px) and (max-width: 1024px) {
    justify-content: center;
    z-index: 4;
    margin-top: 4em;

    p {
      font-size: 1.3em;
    }

    .active-about {
      width: 35em;
    }

    .close-icon {
      font-size: 1.5em;
    }
  }

  @media (min-width: 601px) and (max-width: 770px) {
    justify-content: center;
    z-index: 4;
    margin-top: 4em;

    p {
      font-size: 1.2em;
    }
  }

  @media (min-width: 371px) and (max-width: 600px) {
    justify-content: center;
    z-index: 4;

    .image-container {
      width: 170px;
    }

    .headshot {
      width: 166px;
      height: 119px;
    }

    .active-about {
      border-radius: 5px;
      width: 75vw;
      margin-top: 4.85em;
    }

    h1 {
      font-size: 1.15em;
      margin-top: 0.5em;
      margin-bottom: 0.25em;
    }

    p {
      font-size: 0.75em;
    }

    p:first-of-type {
      margin-top: 0.25em;
    }
  }

  @media screen and (max-width: 370px) {
    justify-content: center;
    z-index: 4;

    .image-container {
      width: 170px;
    }

    .headshot {
      width: 166px;
      height: 119px;
    }

    .active-about {
      border-radius: 5px;
      width: 75vw;
      margin-top: 4.85em;
    }

    h1 {
      font-size: 1.15em;
      margin-top: 0.5em;
      margin-bottom: 0.25em;
    }

    p {
      font-size: 0.63em;
    }

    p:first-of-type {
      margin-top: 0.25em;
    }
  }
`
