import styled from 'styled-components'

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .content-container {
    display: flex;
    flex-direction: column;
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
    padding-right: 0.5em;
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
`