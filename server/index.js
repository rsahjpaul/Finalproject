"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const { postFinishedProject, getProjects, getProjectById, postNewProject, getNewProjects, updateProjectbyId } = require("./handlers");

const port = 8888;

express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  .use(morgan("tiny"))
  .use(express.json())

  // ---------------------------------
  // add new endpoints here 👇

  .get("/test", (req, res) => {
    res.status(200).json({ itWorked: true });
  })
  .get("/bacon", (req, res) => res.status(200).json("🥓"))

  //get projects

  .get("/getProjects", getProjects)
  .get("/getNewProject", getNewProjects)


  //get project based on Id

  .get("/getProject/:projectId", getProjectById)

  //add project
  .post("/addFinishedProject", postFinishedProject)
  .post("/addNewProject", postNewProject)

  //edit project
  .patch("/updateProject/:projectId", updateProjectbyId)
  


  // add new endpoints here ☝️
  // ---------------------------------

  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8888.
  .listen(port, () => console.log(`Listening on port ${port}`));
