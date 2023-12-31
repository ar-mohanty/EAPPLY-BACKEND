const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/Auth");
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the server * cors true changed.");
});

app.use(
  cors({
    'origin': "*", // Set the correct origin
    'methods': "GET, POST, PUT, DELETE",
    'credentials': true,
    'preflightContinue': false,
    'optionsSuccessStatus': 204,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});
