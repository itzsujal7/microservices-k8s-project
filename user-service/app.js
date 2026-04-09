const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("http://product-service");
        res.send("User Service → " + response.data);
    } catch (err) {
        res.send("Error connecting to product-service");
    }
});

app.listen(3000, () => console.log("User Service Running"));