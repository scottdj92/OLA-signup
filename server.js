const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("src"));
app.use(express.static("css"));

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(3000, () => {
    console.log("server listening at port 3000");
});
