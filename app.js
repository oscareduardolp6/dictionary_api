var express = require("express");
var app = express();

var port = process.env.port || 8080 

app.get("/", function(req, res){
    res.json({mensaje: "Hola Mundo!"})
}); 

app.get("/cervezas", function(req, res){
    res.json({mensaje: "Vamos por unas cervezas!"})
}); 

app.post("/", function(req, res){
    res.json({mensaje: "Método post"})
}); 

app.delete("/", function(req, res){
    res.json({mensaje: "Método delete"})
});

app.listen(port);

console.log("API escuchando en el puerto " + port);