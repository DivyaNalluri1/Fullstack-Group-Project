
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passwordHash = require("password-hash");
const admin = require('firebase-admin');

// Middleware to parse JSON and url-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static("public"));
app.set("view engine", "ejs");

const serviceAccount = require('./key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const firestore = admin.firestore();
app.get("/signup", function (req, res) {
  res.sendFile(__dirname + "/public/" + "signup.html");
});

app.post("/signupSubmit", function (req, res) {
  const emailQuery = db.collection("studentDemo").where("email", "==", req.body.email);
  const usernameQuery = db.collection("studentDemo").where("username", "==", req.body.username);

  Promise.all([emailQuery.get(), usernameQuery.get()])
    .then(([emailDocs, usernameDocs]) => {
      if (!emailDocs.empty || !usernameDocs.empty) {
        res.send("This email or username already exists");
      } else {
        const hashedPassword = passwordHash.generate(req.body.password);
        db.collection("studentDemo")
          .add({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
          })
          .then(() => {
            res.sendFile(__dirname + "/public/" + "login.html");
          })
          .catch((error) => {
            res.send("Something went wrong: " + error.message);
          });
      }
    })
    .catch((error) => {
      res.send("Something went wrong: " + error.message);
    });
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/public/" + "login.html");
});

app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/loginsubmit", function (req, res) {
  db.collection('studentDemo')
    .where("email", "==", req.query.email)
    .get()
    .then((docs) => {
      let verified = false;
      docs.forEach((doc) => {
        const storedPassword = doc.data().password;
        console.log("Input password:", req.query.password);
        console.log("Stored password:", storedPassword);
        verified = passwordHash.verify(req.query.password, storedPassword);
      });
      if (verified) {
        res.sendFile(__dirname + "/public/" + "home.html");
      } else {
        console.log("Login failed");
        res.send("Fail");
      }
    });
});

app.get("/dashboard", function (req, res) {
  res.send("hi");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
