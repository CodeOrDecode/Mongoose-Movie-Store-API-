const express = require("express");
const mongoose = require("mongoose");
const server = express();
const axios = require("axios")
server.use(express.json());
const PORT = 3004;


mongoose.connect("mongodb://127.0.0.1:27017/ggggg")

server.get("/movies", async (req, res) => {

    try {
       let res1 = await axios.get(`https://www.omdbapi.com/?s=${req.query.q}&apikey=9ccab79`);
       console.log(res1.data.Search);
         res.status(200).send(res1.data.Search);
    } catch (error) {
        res.status(404).send("error");
        console.log(error);
    }
})

server.get("/title", async (req, res) => {

    try {
       let res1 = await axios.get(`https://www.omdbapi.com/?t=${req.query.q}&apikey=9ccab79`);
       console.log(res1.data);
         res.status(200).send(res1.data);
    } catch (error) {
        res.status(404).send("error");
        console.log(error);
    }
})

server.get("/year", async (req, res) => {

    try {
       let res1 = await axios.get(`https://www.omdbapi.com/?s=${req.query.q}&apikey=9ccab79`);
         let sorteddata = res1.data.Search.sort((a,b)=>{
            return a.Year-b.Year;
         })
         res.status(200).send(sorteddata);
    } catch (error) {
        res.status(404).send("error");
        console.log(error);
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})