import styled, { keyframes } from 'styled-components'
import { slideInLeft } from 'react-animations'

export const slideFromLeft = keyframes`${slideInLeft}`

export const SocialContainer = styled.div`
  .active-social {
    position: absolute;
    height: auto;
    width: auto;
    float: left;
    background-color: whitesmoke;
    opacity: 0.7;
    margin-top: 2em;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    flex-direction: column;
    animation: 1s ${slideFromLeft};
  }

  .inactive-social {
    left: -300px;
    position: absolute;
  }

  a {
    margin: 0;
    padding: 0;
  }

  .social-icon {
    padding-top: 1em;
    padding-left: 1em;
    padding-right: 1em;
    font-size: 2em;
    color: black;
  }

  .fa-file {
    padding-bottom: 1em;
  }

  .social-icon:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    align-items: flex-start;
    height: 100vh;
    position: absolute;
    margin-top: 30%;

    .active-social {
      margin-top: 0;
    }

    .social-icon {
      padding-top: 0.7em;
      padding-left: 0.7em;
      padding-right: 0.7em;
      font-size: 1.5em;
    }
  }
`
