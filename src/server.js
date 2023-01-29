const express = require("express")
const server =  express()


// Configurar  pasta public

server.use(express.static("public"))

// utilizando template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/view",{
    express:server,
    noCache: true
})
//Configurar Caminhos da minha aplicação
//pagina inicial
// rep : é uma requisição
//res: é uma resposta
server.get("/",(req,res) => {

    return res.render("index.html")
})
server.get("/create-point",(req,res) => {

    return res.render("create-point.html")
})
server.get("/search",(req,res) => {

    return res.render("search-results.html")
})
//ligar o servidor
server.listen(3000)