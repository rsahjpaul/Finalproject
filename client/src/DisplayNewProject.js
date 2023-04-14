import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import CommentSection from "./CommentSection";
import styled, { createGlobalStyle } from "styled-components";
import { Icon } from "react-icons-kit";
import { spinner } from "react-icons-kit/icomoon/spinner";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiHeart, FiMessageSquare, FiShare } from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const DisplayNewProject = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState({});
  const [liked, setLiked] = useState(false);
  const [color, setColor] = useState("white");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();

  const { projectId } = useParams();

  useEffect(() => {
    fetch(`/getProject/${projectId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
        setIsLoading(false);
        setTitle(data.project?.title);
        setDescription(data.project?.description);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [projectId, setTitle, setDescription]);

  useEffect(() => {
    console.log(title);
    console.log(description);
  }, [title, description]);

  if (isLoading === true) {
    return (
      <LoadingDiv>
        <LoadingIcon icon={spinner} size={60} />
      </LoadingDiv>
    );
  }

  const handleLike = () => {
    setLiked(!liked);
    console.log(liked);
  };

  const handleFinalize = (e) => {
    e.preventDefault();

    const project = { title, description };
    console.log(project);

    fetch("/addFinishedProject", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // delete project from current collection
        fetch(`/deleteProject/${projectId}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate(`/`);
          })
          .catch((error) => {
            console.error(error);
            window.alert(error);
          });
      })
      .catch((error) => {
        console.error(error);
        window.alert(error);
      });
  };

  return (
    <ProjectContainer>
      <ButtonWrapper>
        <Link to={`/editProject/${projects.project?.id}`}>
          <StyledIcon />
        </Link>
      </ButtonWrapper>
      <ProjectHeader>
        <ProjectTitle>{projects.project?.title}</ProjectTitle>
        <ProjectAuthor>By: WritersBlockUser</ProjectAuthor>
      </ProjectHeader>
      <ProjectContent>
        <ProjectDescription
          dangerouslySetInnerHTML={{ __html: projects.project?.description }}
        />
      </ProjectContent>

      <LowerContainer>
        <StyledButton
          onClick={handleLike}
          style={{ color: liked ? "purple" : "white" }}
        >
          <StyledLike />
        </StyledButton>

        <StyledFinalizeButton onClick={handleFinalize}>
          <p>Finalize</p>
        </StyledFinalizeButton>
      </LowerContainer>

      <CommentSection projectId={projectId} />
    </ProjectContainer>
  );
};

export default DisplayNewProject;

const StyledFinalizeButton = styled.button`
  color: white;
  background: transparent;
  border-style: none;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const StyledButton = styled.button`
  background: transparent;
  border-style: none;
`;

const LowerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10vh;
  width: 50vh;
`;

const StyledLike = styled(FaThumbsUp)`
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const StyledIcon = styled(AiFillEdit)`
  color: white;
  font-size: 2vh;
  margin-right: 2vh;
  margin-top: 1vh;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
`;

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
