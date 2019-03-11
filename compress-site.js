const express = require('express')
const compression = require('compression')
const app = express()

app.use(compression({ level: 9, threshold: 0 }))

app.get('/', (req, res, next) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="end">
    <head>
        <meta charset="utf-8">
        <title>Days of High Adventure</title>
    </head>
    <body>
        <section role="application">
            <h1>Welcome to my Adventure</h1>
        </section>
    </body>
    </html>
    `)
    console.log(req.acceptsEncodings())
})

    app.listen(
        1337,
        () => console.log('Web Server running on port 1337'),
    )