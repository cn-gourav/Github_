import express from "express";
const app = express();
const port = 3000;
import sum from "./sum.js";

app.get("/getsum/:a/:b", (req, res) => {
    const { a, b } = req.params;

    res.json({
        ans: sum(parseInt(a), parseInt(b)),
    });
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
