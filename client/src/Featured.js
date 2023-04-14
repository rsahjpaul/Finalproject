import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Modal from "react-modal";
import styled, { createGlobalStyle } from "styled-components";
import { Icon } from "react-icons-kit";
import { spinner } from "react-icons-kit/icomoon/spinner";

const Featured = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState({ projects: [] });

  useEffect(() => {
    fetch("/getProjects")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data)
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
     <Container>
     <TitleContainer>
      <Subtitle>Featured Projects</Subtitle>
      </TitleContainer>

     
        <InfoBar>
          {projects.projects?.map(
            (
              project // Access the projects array from the state object
            ) => (
              <StyledList key={project.id}>
                <StyledLink to={`/project/${project.id}`}>
                  <h3>{project.title}</h3>      
                </StyledLink>
              </StyledList>
            )
          )}
        </InfoBar>
      </Container>
    </>
  );
};

export default Featured;

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
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 10vh;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 50vh;
  height: 15vh;
  color: #fff;
  border-radius: 5px;
  font-size: 17px;
  font-weight: lighter;
  display: flex;
  justify-content: center;
  align-items: center;

 
`;
