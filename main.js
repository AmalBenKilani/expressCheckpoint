const express = require('express')
const app = express()
const middleWare = (req, res, next) => {
    var d = new Date();
    var n = d.getDay();
    var h = d.getHours();

    if ((n == 1 || n == 2 || n == 3 || n == 4 || n == 5) && (h > 9 && h < 17)) {

        next()
    }
    else {
        res.send('this web application is not available now ')
    }
}

app.use(middleWare)
app.get('/', (req, res) => { res.sendFile(__dirname + '/home.html') })
app.get('/contact.html', (req, res) => { res.sendFile(__dirname + '/contact.html') })
app.get('/services.html', (req, res) => { res.sendFile(__dirname + '/services.html') })
app.get('*', (req, res) => { res.redirect('/') })





app.listen(3000, (err) => err ? console.log(err) : console.log('erver is running on server 3000'))
