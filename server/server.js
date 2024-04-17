const express = require("express");
const cors = require("cors");
const config = require("./config");
const routes = require("./routes");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

// We use express to define our various API endpoints and
// provide their handlers that we implemented in routes.js
app.get("/author/:type", routes.author);
app.get("/random", routes.random);
app.get("/song/:song_id", routes.song);
app.get("/album/:album_id", routes.album);
app.get("/albums", routes.albums);
app.get("/album_songs/:album_id", routes.album_songs);
app.get("/top_songs", routes.top_songs);
app.get("/top_albums", routes.top_albums);
app.get("/search_airbnb", routes.search_airbnb);
app.get("/list_host", routes.list_host);
app.get("/recommendation", routes.recommendation);
app.get("/neighborhoods", routes.neighborhoods);
app.get("/listing", routes.listing);
app.get("/crime", routes.crime);

app.listen(config.server_port, () => {
  console.log(
    `Server running at http://${config.server_host}:${config.server_port}/`
  );
});

module.exports = app;
