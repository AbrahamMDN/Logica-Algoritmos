// Entregable 4

// Lista de invitados ordenada alfabeticamente
const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

// Busqueda de invitados que pueden sentarse juntos bajo la condición dada
function encontrarPareja(arr) {
    // Punteros iniciales
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // Si hay coincidencia en las iniciales, devuelve el par que cumple la condición
        if (arr[inicio][0] === arr[siguiente][0]) {
            return [arr[inicio], arr[siguiente]];
        // Si no hay coincidencia, ambos punteros avanzan
        } else {
            inicio++;
            siguiente++;
        }
    }

    return null; // Si no se encuentra ningún par, devuelve null
}

// Impresión 
console.log(encontrarPareja(invitados));