

import { React, useState, useEffect } from "react";
import Modal from "react-modal";
import styled, { createGlobalStyle } from "styled-components";

const About = () => {


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (

    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
    <h1>Welcome to WritersBlock!</h1>

    <h3>A community where creative people like yourself can seek to improve their crituquing/literacy skills 
      or, if you're brave enough, post your work to the community to recieve feedback!
    </h3>

    <h2>How it works:</h2>
    <p>New projects are submitted in the "review" category. 
    </p>
    <p>The goal is to strengthen your ability for critique. And so this means that, while you are able to like a post, you must 
      also provide a comment with a minimum of 100 characters in order to encourage a thoughtful response.</p>
      <p>Remember that your likes hold value! They represent that the creator has listened to your crituqe and implemented it in some way in their project.
        Hone your crituqes, and dole out your likes carefully. 
      </p>
    <ul>
    </ul>
    <button onClick={closeModal}>Return</button>
  </Modal>
  )


}

export default About