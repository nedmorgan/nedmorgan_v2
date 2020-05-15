import styled, { keyframes } from 'styled-components'
import { fadeInDown } from 'react-animations'

export const fadeDown = keyframes`${fadeInDown}`

export const ConnectContainer = styled.div`
  float: right;

  .connect-icon {
    color: whitesmoke;
    font-size: 2em;
    margin: 0.5em;
  }

  .connect-icon:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  .connect-icon:active {
    color: #3366bb;
  }

  @media screen and (max-width: 600px) {
    position: relative;
    animation: 1s ${fadeDown};

    .connect-icon {
      color: black;
      cursor: pointer;
    }
  }
`
