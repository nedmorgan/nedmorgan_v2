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
    opacity: 0.7;
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

  @media screen and (max-width: 600px) {
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
`
