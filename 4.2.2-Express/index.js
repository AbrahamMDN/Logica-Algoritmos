const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Bienvendo a Express");
})

app.listen(8080, () => {
    console.log("El servidor esta corriendo en el puerto 8080");
})