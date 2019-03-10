const express = require('express')
const app = express()

app.get('/', (req, res, nextHandler) => {
    res.status(200).send("Hello from ExpressJS. Code Hard!");
})

app.listen(
    1337,
        () => console.log("web server running on port 1337"),
)