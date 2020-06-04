const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../../../.env")
})

module.exports = {
  development: {
    username: "root",
    password: null,
    database: "",
    host: "127.0.0.1",
    dialect: "sqlite",
    storage: path.resolve(__dirname, "../../../db.sqlite"),
    logging: str => console.log(`*******************************\n${str}\n*******************************`)
  }
}
