var express = require("express");
var app = express();

var port = process.env.port || 8080 

//Para establecer las distintas rutas, necesitamos instanciar el router de express
var router = express.Router()

//Establecemos nuestra primera ruta, mediante get
router.get('/', function(req, res){
    res.json({mensaje: "Bienvenido a nuestra API!"})
}); 

router.get("/:nombre", function(req, res){
    res.json({mensaje: "Hola" + req.params.nombre})
})

//Nuestra ruta irá en http://localhost:8080/api
//Es bueno que haya un prefijo, sobre todo por el tema de versiones de la API 
app.use('/api', router);

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