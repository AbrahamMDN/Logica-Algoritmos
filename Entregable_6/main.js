// Entregable 6

// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// Construcción de la función principal
const findGift = (gifts, giftName, index = 0) => {
    // Caso base: El regalo no está en la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    // Caso base: El regalo está en la lista
    if (gifts[index] === giftName){
        return `${giftName} se encuentra en la posición ${index}`;
    }
    // Se realiza una llamada recursiva de la función para buscar el regalo 
    return findGift(gifts, giftName, index + 1);
}

// Aplicación de la función para buscar el regalo Lego
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));

// Aplicación de la función para buscar el regalo Camión
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
