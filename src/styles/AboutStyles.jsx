import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const AboutContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  .active-about {
    position: absolute;
    height: auto;
    width: 35em;
    background-color: whitesmoke;
    opacity: 0.7;
    margin-top: 2em;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    animation: 1s ${fade};
    padding-right: 1em;
    padding-left: 1em;
  }

  .inactive-about {
    position: absolute;
    visibility: hidden;
  }

  h1,
  p {
    margin-bottom: 0;
  }

  p:last-of-type {
    margin-bottom: 1em;
  }
`
