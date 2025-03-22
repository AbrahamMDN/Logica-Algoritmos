// app.js

import {registrarDestino, mostrarItinerario} from './viajes.js';

// Iniciar la aplicación
const iniciarApp = () => {
    // Registro de los destinos
    registrarDestino("Paris", "2024-06-15", "Avión", 2);
    registrarDestino("Londres", "2024-07-01", "Tren", 5);
    registrarDestino("Dubái", "2025-03-22", "Avión Privado", 3);

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
};

// Ejecutar la aplicación
iniciarApp();
