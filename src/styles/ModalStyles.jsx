import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const ModalContainer = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .close-button {
    background-color: transparent;
    outline: none;
    overflow: hidden;
    border: none;
    float: right;
    font-size: 1.5em;
  }

  .close-button:hover {
    cursor: pointer;
  }

  .modal-main {
    position: fixed;
    background: whitesmoke;
    width: 60%;
    height: auto;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
  }

  .display-block {
    display: block;
    animation: 1s ${fade};
  }

  .display-none {
    display: none;
  }

  h1 {
    text-align: center;
    font-family: 'Raleway', sans-serif;
    color: black;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .form-labels {
    font-family: 'Raleway', sans-serif;
    font-size: 1.25em;
    margin-left: 1em;
  }

  .form-inputs,
  .comment-box {
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
    font-size: 0.75em;
    padding: 0.5em;
    margin-left: 1em;
    margin-top: 1em;
    border: black;
  }

  .form-inputs {
    width: 50%;
  }

  .invalid-email-text {
    color: red;
    font-size: 0.25em;
    font-family: 'Raleway', sans-serif;
    margin-bottom: 0;
  }

  .comment-box {
    width: 50%;
    resize: none;
  }

  .button-div {
    text-align: center;
  }

  .submit-button {
    color: black;
    font-size: 1em;
    width: 15%;
    margin-bottom: 1em;
    margin-left: 1.5em;
    margin-top: 1em;
    border: 2px solid black;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
    -webkit-transition-duration: 0.2s; /* Safari */
    transition-duration: 0.2s;
    display: inline-block;
  }

  .submit-button:hover {
    color: whitesmoke;
    font-weight: bold;
    background-color: black;
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  .success-text {
    text-align: center;
    color: green;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    animation: 0.5s ${fade};
    margin: 0;
  }

  .hide-success-text,
  .hide-invalid-form-text {
    visibility: hidden;
    margin: 0;
  }

  .invalid-form-text {
    text-align: center;
    color: red;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    animation: 0.5s ${fade};
    margin: 0;
    margin-bottom: 0.5em;
  }

  .visible {
    visibility: visible;
  }

  .invisible {
    visibility: hidden;
  }

  @media screen and (max-width: 600px) {
    z-index: 3;
    margin-top: 2em;

    .close-button {
      padding-top: 0.25em;
    }

    .form-labels {
      display: flex;
      flex-direction: column;
      margin-top: 0.75em;
    }

    .modal-main {
      width: 80%;
      height: 70%;
      top: 45%;
    }

    .form-inputs,
    .comment-box {
      width: 75%;
      margin-top: 0.25em;
    }

    .submit-button {
      width: 25%;
      margin-left: 0.5em;
      margin: 0 auto;
      margin-top: 1em;
    }
  }
`
