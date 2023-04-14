import { React, useState, useEffect } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditProject = () => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [projects, setProjects] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { projectId } = useParams();
  const [description, setDescription] = useState("");


  //We need a fetch and Patch. Fetch for getting relevent project, and patch for editing it.

  //Fetch

  useEffect(() => {
    // Fetch all projects from the server
    fetch(`/getProject/${projectId}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProjects(data);
        setDescription(data.project?.description)
        setTitle(data.project?.title)

        setIsLoading(false);

      })
      .catch((error) => {
        console.error(error);
      });
  }, [projectId]);

  //PATCH 

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = { title, description };
    console.log(project);

    fetch(`/updateProject/${projectId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        window.alert(error);
      });
  };

  return (
    <Container>
      <Title>Edit Your Project</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="title">Title:</Label>
        <Input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
<StyledReactQuill
  value={description}
  onChange={(value) => setDescription(value)}
/>        <SubmitButton type="submit">Finish Edit</SubmitButton>
      </Form>
    </Container>
  );
};

const StyledH = styled.h1`
  margin-top: 7vh;
  color: white;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 3vh;
  color: lightgray;
  display: block;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: none;
`;

const StyledReactQuill = styled(ReactQuill)`
  .ql-editor {
    background-color: lightgrey;
    width: 90vh;
    min-height: 75vh;
    font-size: 16px;
    line-height: 1.5;
    color: black;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 75px;

  &:hover {
    background-color: #0062cc;
  }
`;

export default EditProject;
