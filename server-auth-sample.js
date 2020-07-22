const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const expressjwt = require("express-jwt");

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

// fake user data
const users = [
    { id: 1, username: "admin", password: "admin" },
    { id: 2, username: "guest", password: "guest" }
];

app.use(bodyParser.json());
app.use(cors());

// middleware to check token validity
// const jwtCheck = expressjwt({
//     secret: "mysupersecretkey",
//     algorithms: ["RS256"],
//      getToken: (req) => {
//         if(req.headers.authorization && req.)
//      }
// });

const jwtCheck = (req, res, next) => {
    const token = req.header("x-token");
    jwt.verify(token, "mysupersecretkey", (error, decoded) => {
        if (error) {
            console.log("jwt failed", error);
            return res.status(404).send({ ...error, msg: "Token failed login", success: true });
        }
        // If it token is valid, then we just call next
        next();
    })
    // Todo 
}

// login returns a jwt token if the user exists
app.post("/login", (req, res) => {
    // don't have a username or password... don't go any further
    if (!req.body.username || !req.body.password) {
        res
            .status(400)
            .send("You need a username and password");
        return;
    }

    // search for the user in the array; this would be a db call instead
    const user = users.find((u) => {
        return u.username === req.body.username && u.password === req.body.password;
    });

    // user not found, send 401
    if (!user) {
        res
            .status(401)
            .send("User not found");
        return;
    }

    // if we made it this far it means we found the user, sign the token
    const token = jwt.sign({
        sub: user.id,
        username: user.username,
        algorithm: "RS256"
    }, "mysupersecretkey", { expiresIn: 60 });

    res
        .status(200)
        .send({ access_token: token });
});

// non-protected path, public resource
app.get("/resource", (req, res) => {
    res
        .status(200)
        .send("Public resource, you can see this");
});

// private path, private resource
app.get("/resource/secret", jwtCheck, (req, res) => {
    res
        .status(200)
        .send("Secret resource, you should be logged in to see this");
});

// 404 if path doesn't exist
app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://${HOST}:${PORT}.`);
});