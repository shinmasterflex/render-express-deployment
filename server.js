const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Welcome to the Backend Server!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


