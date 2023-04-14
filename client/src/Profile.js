import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  // Here you can add state hooks and fetch user data from your database

  return (
    <Container>
      <Title>Profile</Title>
      <UserInfo>
        <Name>User Name</Name>
        <Email>example@example.com</Email>
        <Bio></Bio>
      </UserInfo>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  background-color:lightgrey;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #363636;
  text-align: center;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #363636;
`;

const Email = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #707070;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #363636;
`;

export default Profile;
