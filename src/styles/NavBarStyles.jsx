import styled, { keyframes } from 'styled-components'
import { fadeInDown, fadeInUp } from 'react-animations'

export const fadeUp = keyframes`${fadeInUp}`
export const fadeDown = keyframes`${fadeInDown}`

export const NavContainer = styled.div`
  display: flex;
  overflow: hidden;
  background-color: whitesmoke;
  opacity: 0.7;

  .inactive-nav {
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .icon {
    display: none;
  }

  a {
    color: black;
    font-family: 'Raleway', sans-serif;
    font-size: 2em;
    font-weight: bold;
    padding: 0.3em;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
  }

  #topnav1 {
    margin-left: 1em;
  }

  a:hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.7;
    border-radius: 5px;
    color: whitesmoke;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    position: absolute;
    width: 100vw;
    animation: 1s ${fadeDown};

    .active-nav {
      background-color: whitesmoke;
      opacity: 0.7;
      display: flex;
      flex-direction: column;
    }

    .inactive-nav {
      display: none;
    }

    .nav-link {
      visibility: hidden;
    }

    .nav-link-drop {
      visibility: visible;
      font-size: 1em;
      font-weight: bold;
      padding-left: 1em;
    }

    #topnav1 {
      margin-left: 0;
      animation: 0.8s ${fadeDown};
    }

    #topnav2 {
      animation: 1s ${fadeDown};
    }

    #topnav3 {
      animation: 1.2s ${fadeDown};
    }

    #topnav4 {
      animation: 1.2s ${fadeDown};
    }

    .icon-link {
      margin-left: 0.5em;
      width: 0.9em;
    }

    .icon {
      float: left;
      display: block;
    }

    .icon:hover {
      cursor: pointer;
    }
  }
`
