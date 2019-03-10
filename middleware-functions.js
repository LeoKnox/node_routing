const express = require('express')
const app = express()

app.use((req, res, next) => {
    req.allowed = Reflect.has(req.query, 'allowme')
    next()
})

app.get('/', (req, res, next) => {
    if (req.allowed) {
        res.send('Hello secret world!')
    } else {
        res.send('You shall not pass')
    }
})

app.listen(
    1337,
    () => console.log('Web Server running on port 1337'),
)