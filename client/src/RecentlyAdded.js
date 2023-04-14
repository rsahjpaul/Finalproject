import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Modal from "react-modal";

import styled, { createGlobalStyle } from "styled-components";
import { Icon } from "react-icons-kit";
import { spinner } from "react-icons-kit/icomoon/spinner";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const RecentlyAdded = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState({ projects: [] });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    fetch("/getNewProject")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setProjects(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (isLoading === true) {
    return (
      <LoadingDiv>
        <LoadingIcon icon={spinner} size={60} />
      </LoadingDiv>
    );
  }
  return (
    <>
      <ButtonWrapper>
        <StyledIcon onClick={openModal}></StyledIcon>
      </ButtonWrapper>
      <Container>
        <TitleContainer>
          <Subtitle>Recently Added</Subtitle>
        </TitleContainer>

        <InfoBar>
          {projects.projects?.map(
            (
              project // Access the projects array from the state object
            ) => (
              <StyledList key={project.id}>
                <StyledLink to={`/newProject/${project.id}`}>
                  <h3>{project.title}</h3>
                </StyledLink>
                <StyledModal isOpen={modalIsOpen} onRequestClose={closeModal}>
                  <StlyedModalTitle>Welcome to WritersBlock!</StlyedModalTitle>

                  <h3>
                    A community where creative people like yourself can seek to
                    improve their critiquing/literacy skills or, if you're brave
                    enough, post your work to the community to recieve feedback!
                  </h3>

                  <h2>How it works:</h2>
                  <p>
                    Every day a new set of projects will be posted on the
                    Homepage that will come in two categories: projects that are
                    in the process of peer review process and those that have
                    passed the peer review process.
                  </p>
                  <p>
                    The goal is to strengthen your ability for critique. And so
                    this means that, while you are able to like a post, you must
                    also provide a comment with a minimum of 100 characters in
                    order to encourage a thoughtful response.
                  </p>
                  <ul></ul>
                  <ButtonDiv>
                    <button onClick={closeModal}>Return</button>
                  </ButtonDiv>
                </StyledModal>
              </StyledList>
            )
          )}
        </InfoBar>
      </Container>
    </>
  );
};

export default RecentlyAdded;

const StlyedModalTitle = styled.h1`
  text-align: center;
`;
const ButtonDiv = styled.div`
  margin-top: 8vh;
`;
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
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
`;

const StyledIcon = styled(AiOutlineQuestionCircle)`
  color: white;
  font-size: 4vh;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const LoadingIcon = styled(Icon)`
  margin-left: 20vh;
  position: absolute;
  color: whitesmoke;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
const LoadingDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleContainer = styled.div`
  text-align: center;
  border-bottom: solid 1px white;
  height: 20vh;
  font-size: larger;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-left: 10vh;
  overflow-y: scroll;
`;
const Subtitle = styled.h2`
  color: lightgray;
`;


const StyledList = styled.li`
  margin: 10px 50px 25px 50px;
  list-style: none;
  width:70vh;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const InfoBar = styled.div`
  margin-top: 25px;
  width: 75vh;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 10vh;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 25vh;
  height: 12vh;
  color: #fff;
  border-radius: 5px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
