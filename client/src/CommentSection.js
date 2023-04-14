
import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Modal from "react-modal";
import styled, { createGlobalStyle } from "styled-components";

const CommentSection = () => {

    const [comments, setComments] = useState([]);

    return (
        <CommentSectionContainer>

          <StyledTitle>Comments</StyledTitle>

          <CommentList>

            {comments.map((comment) => (
              <CommentItem key={comment.id}>
                <CommentText>{comment.text}</CommentText>
                <CommentAuthor>By: {comment.author}</CommentAuthor>
              </CommentItem>
            ))}

          </CommentList>
          <CommentForm >
            <CommentLabel>
              <CommentTextarea
                
         
                required
              />
            </CommentLabel>
            <CommentButton type="submit">Submit</CommentButton>
          </CommentForm>

        </CommentSectionContainer>
      );
}

export default CommentSection

const StyledTitle = styled.h1`
color: lightgray;

`
const CommentSectionContainer = styled.div`
width: 75vh;
  padding: 10px;
  margin-top: 20px;
`;

const CommentList = styled.ul`
  margin: 0;
  padding: 0;
`;

const CommentItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;

const CommentText = styled.p`
  margin: 0;
`;

const CommentAuthor = styled.p`
  margin: 0;
  font-style: italic;
`;

const CommentForm = styled.form`
  margin-top: 20px;
`;

const CommentLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const CommentTextarea = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid gray;
`;

const CommentButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: blue;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;