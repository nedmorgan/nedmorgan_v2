import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75vh;

  .content-container {
    display: flex;
    flex-direction: column;
    animation: 1s ${fade};
  }

  p {
    font-family: 'Raleway', sans-serif;
    text-align: center;
    font-size: 4em;
    letter-spacing: 10px;
    font-weight: 700;
    margin: 0;
    mix-blend-mode: lighten;
    color: black;
    background: whitesmoke;
    opacity: 0.7;
    padding-left: 0.5em;
    padding-right: 0.3em;
  }

  p:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding-top: 0.5em;
  }

  p:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-bottom: 0.5em;
  }

  .hidden {
    visibility: hidden;
    z-index: 0;
    animation: 1s ${fade};
  }

  @media screen and (max-width: 600px) {
    height: 80vh;
    z-index: 0;

    p {
      font-size: 2.5em;
    }
  }
`
