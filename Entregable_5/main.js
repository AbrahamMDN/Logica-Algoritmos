// Entregable 5

// Construcción de la función principal
function findLongestWord(text) {
    // Creación de un arreglo que contiene cada palabra del texto como elemento
    const word = text.split(' ');
    // Definición de un string vacío para almacenar la palabra más larga
    let longestWord = ''; 
    // Recorrido de cada elemento del arreglo comparando la longitud de las palabras y actualizando la palabra más larga encontrada
    for (i = 0; i < word.length; i++){
        if (word[i].length > longestWord.length){
            longestWord = word[i];
        }
    }
    // Se retorna la palabra más larga encontrada
    return longestWord;
}

// Ejecución de la función
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// Impresión del resultado
console.log(findLongestWord(text)); 