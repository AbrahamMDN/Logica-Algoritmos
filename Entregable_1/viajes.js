// viajes.js

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte, pasajeros) => {
    // Crear un objeto con los datos del destino
    let nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte, pasajeros)
    };

     // Añadir el nuevo destino al arreglo global
    destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje
export const calcularCosto = (destino, transporte, pasajeros) => {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "París") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    } else if (destino === "Ciudad de México") {
    costoBase = 100;
    } else if (destino === "Dubái") {
    costoBase = 700;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    } else if (transporte === "Avión Privado") {
        costoBase += 500;
    }
    
    // Aplicar descuento según el número de pasajeros
    const descuento = calcularDescuento(pasajeros);
    costoBase -= costoBase * descuento;
    
    return costoBase;
};

// Función para calcular el descuento según el número de pasajeros
const calcularDescuento = (pasajeros) => {
    let descuento = 0;

    if (pasajeros === 2) {
        descuento = 0.05; // 5% de descuento
    } else if (pasajeros >= 3 && pasajeros <= 4) {
        descuento = 0.10; // 10% de descuento
    } else if (pasajeros >= 5) {
        descuento = 0.15; // 15% de descuento
    }

    return descuento;
};

// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
    // Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (let i = 0; i < destinos.length; i++) {
        let viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo.toFixed(2)); //Dos decimales
        console.log("---------------------------");
    }
};