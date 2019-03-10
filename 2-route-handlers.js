const express = require('express')
const app = express()

app.get('/one', (req, res, nextHandler) => {
    res.type('text/plain')
    res.write('Build ')
    nextHandler()
})
app.get('/one', (req, res, nextHandler) => {
    res.status(200).end('Stuff!')
})
app.get('/two',
    (req, res, nextHandler) => {
        res.type('text/plain')
        res.write('Build ')
        nextHandler()
    },
    (req, res, nextHandler) => {
        res.status(200).end('More!')
    })

    app.listen(1337, () => console.log('Web Server running on port 1337'),)