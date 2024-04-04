// Using express and its utilities.
const express = require("express");

// Importing this middleware for use.
const bodyParser = require("body-parser");

// Uses the uuid npm package to generate unique id's.
const { v4: uuidv4 } = require("uuid");

// To deal with the CORS policy.
const cors = require("cors");

// For security.
const helmet = require("helmet");

// Allow's us to use fetch in this application.
const fetch = require("isomorphic-fetch");

const app = express();
const PORT = process.env.PORT || 8080; //Port 8080 is constant.

app.use(bodyParser.json()); //Telling the app we'll be using json data in this app.

app.use(cors());
app.use(helmet());

//Default Values.
let term = "";
let entity = "";
let limit = 10;
let resultsGet;

//Gets the search results for the default values to display on the homepage.
app.get("/", (req, res) => {
  fetch(
    `https://itunes.apple.com/search?term=${term}&entity=${entity}&limit=${limit}`
  )
    .then((res) => res.json())
    .then((results) => {
      resultsGet = results;
    });

  //Sends the gotten search results to the client side.
  res.send(resultsGet);
});

//This POST request is activated when the user enters a value in the search bar and presses enter. This replaces the search results that are currently being sent to the client side with the new search results.
app.post("/", (req, res) => {
  term = req.body.term;
  entity = req.body.entity;
  limit = req.body.limit;

  fetch(
    `https://itunes.apple.com/search?term=${term}&entity=${entity}&limit=${limit}`
  )
    .then((res) => res.json())
    .then((results) => {
      resultsGet = results;
    });

  res.send(resultsGet);
});

//Data received from the client side via the POST method for the user's favorites, are stored here in this array. The data contains the information of the tracks selected by the user as their favorite songs/videos.
let favoritesList = [];

//Displays the array of favorites in the browser.
app.get("/favorites", (req, res) => {
  res.send(favoritesList);
});

//This function is for creating a New Favorite track, using the POST method.
app.post("/favorites", (req, res) => {
  const favorite = req.body;

  //If the user adds the same track, the 'if' statement below, triggers and does not add it to the array.
  if (favoritesList.find((song) => song.trackName === favorite.trackName)) {
    let alertTrack = favorite.trackName;
    console.log(`This is in the basket = ${alertTrack}`);
  } else {
    const favoriteAddID = { ...favorite, idDelete: uuidv4() }; //This adds a unique ID to each post made.

    favoritesList.push(favoriteAddID); //Adds the new Favorite track to the array.

    res.send(
      `The new Favorite [${favorite.trackName}] has been added to the api.`
    );
  }
});

//This function is for deleting a Project using the DELETE method.
app.delete("/favorites/:idDelete", (req, res) => {
  const { idDelete } = req.params;

  favoritesList = favoritesList.filter((song) => song.idDelete !== idDelete); //Filters the webproject array and removes the item, that has the corresponding selected id.

  res.send(`The Web Project [${idDelete}] has been Removed.`);
});

//The app is listening on sever 8080.
app.listen(PORT, () =>
  console.log(`Server is Live on http://localhost:${PORT}`)
);
