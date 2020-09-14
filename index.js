const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();

//* Body parser Middleware
app.use(bodyParser.json());

//* DB Config
const uri = require("./config/keys").mongoURI;

//* Connect to Mongo
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

//* Use Routes
app.use("/api/restaurants", restaurantRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server has started on port ${port}`));
