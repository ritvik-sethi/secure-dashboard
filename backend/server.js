const express = require("express");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(cors());

const USERS_DB_FILE = "./users.txt";
const SECRET_KEY = "abc";

// Helper function to read users from the text file
const readUsersFromFile = () => {
  if (!fs.existsSync(USERS_DB_FILE)) {
    return [];
  }
  const fileData = fs.readFileSync(USERS_DB_FILE, "utf-8");
  return fileData ? JSON.parse(fileData) : [];
};

// Helper function to write users to the text file
const writeUsersToFile = (users) => {
  try {
    fs.writeFileSync(USERS_DB_FILE, JSON.stringify(users, null, 2));
  } catch (error) {
    console.error("Error writing to file:", error);
  }
};

// Helper function to generate JWT token
const generateToken = (email) => {
  return jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
};

// Login API
app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;
    const users = readUsersFromFile();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      const token = generateToken(user.email);
      return res.status(200).json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token,
      });
    } else {
      return res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Signup API
app.post("/signup", (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const users = readUsersFromFile();

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = { email, password, firstName, lastName };
    users.push(newUser);
    writeUsersToFile(users);

    const token = generateToken(newUser.email);
    return res.status(201).json({
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      token,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
