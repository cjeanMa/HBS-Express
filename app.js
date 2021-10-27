require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + "/public"))

const author = "Jean M. Castillo"

app.get("/", (req, res) =>{
    res.render("home", {
        nombre: author,
        titulo: "Learning HBS"
    })
})

app.get("/generic", (req,res)=>{
    res.render("generic", {
        nombre: author,
        titulo: "Generics Page"
    })
})

app.get("/elements", (req,res)=>{
    res.render("elements", {
        nombre: author,
        titulo: "Elements Page"
    })
})

app.get("*", (req, res) =>{
    res.sendFile(__dirname + '/public/index.html')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
