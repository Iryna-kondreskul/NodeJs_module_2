const { response } = require("express");
const express = require("express");
const { request } = require("http");


const books = required("./books.js");

const app = express();

app.get("/books", (req, res)=> {
    const databaseResponse = null;
    res.json(databaseResponse);
    // response.json(books);
    //response.send(books);
})

app.listen(3000);