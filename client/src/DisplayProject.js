import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import CommentSection from "./CommentSection";
import styled, { createGlobalStyle } from "styled-components";
import { Icon } from "react-icons-kit";
import { spinner } from "react-icons-kit/icomoon/spinner";

const DisplayProject = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState({});

  const { projectId } = useParams();

  console.log(projectId);

  useEffect(() => {
    // Fetch all projects from the server
    fetch(`/getProject/${projectId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [projectId]);

  if (isLoading === true) {
    return (
      <LoadingDiv>
        <LoadingIcon icon={spinner} size={60} />
      </LoadingDiv>
    );
  }

  //console.log(projects.project?.title);

  return (
    <ProjectContainer>
      <ProjectHeader>
        <ProjectTitle>{projects.project?.title}</ProjectTitle>
        <ProjectAuthor>By: WritersBlockUser</ProjectAuthor>
      </ProjectHeader>
      <ProjectContent>
        <ProjectDescription
          dangerouslySetInnerHTML={{ __html: projects.project?.description }}
        />
      </ProjectContent>
    </ProjectContainer>
  );
};

export default DisplayProject;

const LoadingIcon = styled(Icon)`
  margin-left: 20vh;
  position: absolute;
  color: whitesmoke;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(180deg);
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

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75vh;
  padding: 30px;
`;

const ProjectHeader = styled.div``;

const ProjectTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 1.2;
  color: lightgrey;
`;

const ProjectAuthor = styled.h3`
  font-weight: lighter;
  color: lightgrey;
`;

const ProjectContent = styled.div`
  font-size: 15px;
  font-weight: lighter;
  line-height: 1;
  color: white;
  font-family: serif;
`;

const ProjectDescription = styled.div``;
