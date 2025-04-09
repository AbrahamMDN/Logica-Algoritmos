// Entregable 7

// Construcción de la función bajo el enfoque Divide and Conquer
function findMax(arr) {
    // Caso base: Si el arreglo tiene un sólo elemento, ese es el valor máximo
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir: Se divide el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2); // Se calcula el punto medio
    const left = arr.slice(0,mid); // Se obtiene la primera mitad
    const right = arr.slice(mid); // Se obtiene la segunda mitad

    // Conquistar: Se llama recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar: Se comparan ambas soluciones y se identifica el valor máximo
    return Math.max(leftMax,rightMax);
}
// Ejemplo de aplicación
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers));