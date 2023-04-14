import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { React, useState, useEffect } from "react";
import Modal from "react-modal";
import styled, { createGlobalStyle } from "styled-components";
import Featured from "./Featured";
import RecentlyAdded from "./RecentlyAdded";




const HomePage = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <HomepageContainer>
      <Title>Welcome to WritersBlock!</Title>
      <InfoBar>
      <StyledButton onClick={openModal}>New to WritersBlock? 
      Click Here!</StyledButton>
      {isAuthenticated ? (
          <>
            <StyledLink to="/upload-project">Upload a Project!</StyledLink>
          </>
        ) : (
          <StyledButton onClick={() => loginWithRedirect()}>
            Log In!
          </StyledButton>
        )}
     
    
        </InfoBar>
      <StyledModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <StlyedModalTitle>Welcome to WritersBlock!</StlyedModalTitle>

        <h3>A community where creative people like yourself can seek to improve their critiquing/literacy skills 
          or, if you're brave enough, post your work to the community to recieve feedback!
        </h3>

        <h2>How it works:</h2>
        <p>Every day a new set of projects will be posted on the Homepage that will come in two categories: projects that are in the 
          process of peer review process and those that have passed the peer review process.
        </p>
        <p>The goal is to strengthen your ability for critique. And so this means that, while you are able to like a post, you must 
           provide a comment with a minimum of 50 characters in order to encourage a thoughtful response.</p>
          <p>Remember that your likes hold value! They represent that the creator has listened to your crituqe and implemented it in some way in their project.
        Hone your crituqes, and dole out your likes carefully. 
      </p>
        <ul>
        </ul>
        <ButtonDiv>
        <button onClick={closeModal}>Return</button>
        </ButtonDiv>
      </StyledModal>
      
    </HomepageContainer>
  );
};

export default HomePage;

const StlyedModalTitle = styled.h1`
text-align: center;

`
const ButtonDiv = styled.div`
margin-top: 8vh;

`
const StyledModal = styled(Modal)`
color: #1f1f1f;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
  border: solid 2px #1f1f1f;
  padding: 20px;
  max-width: 600px;
  width: 90%;
  height: 60vh;
  font-family: sans-serif;
  z-index: 999;


  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #1f1f1f;
    color: white;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      background-color: #005fa3;
    }
  }
`;

const Title = styled.h1`
  color: lightgray;
  font-size: 3rem;
  text-align: center;
  margin: 2rem 0;

`;

const HomepageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;
const InfoBar = styled.div`
  width: 90vh;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border: 2px solid white;
  border-radius: 4px;
  margin: 15vh 0 10vh 10px;
  color: white;
`;

const StyledButton = styled.button`
  text-decoration: none;
  color: #fff;
  background-color: #1f1f1f;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bolder;
  width: 100%;
  border-style: none;

  &:hover {
    background-color: #005fa3;
  }
`;

const StyledLink = styled(Link)`
  font-weight: bolder;
  font-size: 20px;
  text-decoration: none;
  color: white;
  background-color: #1f1f1f;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #005fa3;
  }
`;
