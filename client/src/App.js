import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import Profile from "./Profile";
import UploadProject from "./UploadProject";
import DisplayProject from "./DisplayProject";
import Featured from "./Featured";
import RecentlyAdded from "./RecentlyAdded";
import DisplayNewProject from "./DisplayNewProject";
import EditProject from "./EditProject";

const App = () => {
  return (
    <Router>
      <GlobalStyle />

      <MainContainer>
        <SidebarDiv>
          <Sidebar />
        </SidebarDiv>
        <StyledDivTwo>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/FeaturedProject" element={<Featured />} />
            <Route path="/RecentlyAdded" element={<RecentlyAdded />} />
            <Route path="/upload-project" element={<UploadProject />} />
            <Route path="/project/:projectId" element={<DisplayProject />} />
            <Route path="/newProject/:projectId" element={<DisplayNewProject />} />
            <Route path="/editProject/:projectId" element={<EditProject />} />


          </Routes>
        </StyledDivTwo>
      </MainContainer>
    </Router>
  );
};

export default App;

const SidebarDiv = styled.div``;

const MainContainer = styled.div`
  background-color: #1f1f1f;
  display: flex;
  justify-content: space-between;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const StyledDivTwo = styled.div`
  font-family: sans-serif;
  font-weight: bolder;
  display: flex;
  justify-content: left;

  width: 100vh;
`;
