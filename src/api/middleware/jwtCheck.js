const jwt = require("jsonwebtoken");


module.exports = (req, res, next) => {
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