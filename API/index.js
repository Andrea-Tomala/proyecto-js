//1   //ESTA CONFI ES GENERICA
const express = require('express');
const bodyParser = require ("body-parser");
const http = require ("http");
const path = require ("path");  // hasta aqui primero se importa las librerias instaladas y precargadas por nodejs


//parte 3 desde el backend para que sea devuelta
let peliculas = [
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "1",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
  },
  {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "2",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    "Title": "Batman",
    "Year": "1989",
    "imdbID": "3",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"
  },
  {
    "Title": "Batman Returns",
    "Year": "1992",
    "imdbID": "4",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
  },
  {
    "Title": "Batman Forever",
    "Year": "1995",
    "imdbID": "5",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    "Title": "Batman & Robin",
    "Year": "1997",
    "imdbID": "6",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
  },
  {
    "Title": "The Lego Batman Movie",
    "Year": "2017",
    "imdbID": "7",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
  },
  {
    "Title": "Batman: The Animated Series",
    "Year": "1992–1995",
    "imdbID": "8",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
  },
  {
    "Title": "Batman: Under the Red Hood",
    "Year": "2010",
    "imdbID": "9",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Batman: The Dark Knight Returns, Part 1",
    "Year": "2012",
    "imdbID": "10",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
  },

];


//2 crear aplicacion tipo express
const app = express();
//PARTE 3 dar configuracio a la aplicaicon
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//4 configurar app para poner a disposicion el archivo en el navegador  o servir el directorio public
app.use(express.static(path.join(__dirname, '../public')));

app.get('/saludar/:nombre/:apellido', (req, res) => {
	res.send({ mensaje: 'Hola! ' + req.params.nombre + ' ' + req.params.apellido });
});


app.post('/saludar', (req, res) => { //PARTE 2.1
	res.send({ mensaje: 'Hola! Post ' + req.body.nombre + ' ' + req.body.apellido }); // devolver mensaje al usuario caundo llame a esa ruta aparezca ese mensaje
});
app.put('/saludar', (req, res) => { //PARTE 2.1
	res.send({ mensaje: 'Hola! PUT METHOD' + req.body.nombre + ' ' + req.body.apellido }); // devolver mensaje al usuario caundo llame a esa ruta aparezca ese mensaje
});

  
//PARTE3.1 pra que pueda devolver info de la peli
//PRIMERO RECIBE LA RUTA EN REQ LUEGO RECIBE LA FUNCION CON EL RES SE ENVIA LA INFO DE PELI
app.get('/peliculas', function (req, res) {
	res.send({ peliculas: peliculas  }); //OBJETO PROPIEDAD PELICULA
});


app.get('/peliculas/:imdbID', function (req, res) {
  let imdbID = req.params.imdbID;
  let pelicula = peliculas.find(function(item){
    return item.imdbID == imdbID;
  });
	res.send({ pelicula: pelicula });
});



app.post('/peliculas', function (req, res) {
  let pelicula = req.body;
  peliculas.push(pelicula);
	res.send({ mensaje: 'Registro creado!'});
});

app.put('/peliculas', function (req, res) {
	let pelicula = req.body;
	let index = peliculas.findIndex(function(item){
        return item.imdbID == pelicula.imdbID
      });
	peliculas[index] = pelicula;
	res.send({ mensaje: 'Registro actualizado!' });
}); //buscae que elemento cumple con ID que llegara

app.delete('/peliculas/:imdbID', function (req, res) {
	let imdbID = req.params.imdbID;
	let index = peliculas.findIndex(function(item){
        return item.imdbID == imdbID
	  });
	peliculas.splice(index, 1);
	res.send({ mensaje: 'Registro eliminado!' });
});
//parte3.2 contectar el frontend
//


//5 configurar el enrutamiento para que el usuario al acceder al index muestre sus paginas
app.get("/detalle", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/detalle.html"));
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  }); //cuando el usuario acceda a la ruta le envia el html, poner en cada html del proyecto

//6 asignar puertos sonde el usuario podra acceder para ingresar a estos archivos
const port = process.env.PORT || "9000"; //
app.set("port", port); //seteAR puerto  a la applicacion

// crear servidor
const server = http.createServer(app); 

// el servidor tiene que escuchar las llamadas 
server.listen(port, () => console.log(`Mag Happens on port: ${port}`));

////// SEGUNDA PARTE//////




