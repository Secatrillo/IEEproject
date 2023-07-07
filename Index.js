// Import packages and set the port
import express from "express";
import routes from "./routes.js";
const port = 3002;
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

routes(app);

// Start the server 
const server = app.listen(port , (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});

