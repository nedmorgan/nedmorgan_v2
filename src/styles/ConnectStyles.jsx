import styled, { keyframes } from 'styled-components'
import { fadeInDown } from 'react-animations'

export const fadeDown = keyframes`${fadeInDown}`

export const ConnectContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .connect-icon {
    color: whitesmoke;
    font-size: 2em;
    margin-right: 0.5em;
    margin-top: 0.5em;
    bottom: 0;
  }

  .connect-icon:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  .connect-icon:active {
    color: #3366bb;
  }

  .inactive-email {
    visibility: hidden;
  }

  @media (min-width: 801px) and (max-width: 1024px) {
    .connect-icon {
      font-size: 2.5em;
    }
  }

  @media (min-width: 601px) and (max-width: 800px) {
    .connect-icon {
      font-size: 2.25em;
    }
  }

  @media screen and (max-width: 600px) {
    animation: 1s ${fadeDown};
    width: 50%;
    display: flex;
    justify-content: flex-end;

    .connect-icon {
      color: whitesmoke;
      cursor: pointer;
      margin: 0.25em;
    }
  }
`
