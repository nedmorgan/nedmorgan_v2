import styled, { keyframes } from 'styled-components'
import { fadeInDown, fadeInUp } from 'react-animations'

export const fadeUp = keyframes`${fadeInUp}`
export const fadeDown = keyframes`${fadeInDown}`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  background-color: black;
  opacity: 0.7;
  width: 100%;

  .nav-div {
    width: 50%;
  }

  .icon {
    display: none;
  }

  .icon-link {
    visibility: hidden;
  }

  button {
    color: whitesmoke;
    font-family: 'Raleway', sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    padding: 0.3em;
    border: none;
    margin-left: 0.2em;
    background-color: transparent;
    outline: none;
    overflow: hidden;
  }

  #topnav1 {
    margin-left: 1em;
  }

  button:hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.7;
    border-radius: 5px;
    color: whitesmoke;
  }

  @media screen and (max-width: 600px) {
    justify-content: space-evenly;
    position: absolute;
    width: 100vw;
    animation: 1s ${fadeDown};
    align-items: baseline;

    .active-nav {
      background-color: black;
      opacity: 0.7;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
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
      margin-left: 0.2em;
      animation: 0.8s ${fadeDown};
    }

    #topnav2 {
      animation: 1s ${fadeDown};
    }

    #topnav3 {
      animation: 1.2s ${fadeDown};
    }

    .icon-link {
      margin-left: 0.5em;
      width: 1.5em;
      visibility: visible;
      position: relative;
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
