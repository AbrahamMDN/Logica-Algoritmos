// Entregable 8

// Importación del módulo fs
const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/** Elementos de las notas
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */

// Construcción del programa para gestión de notas personales

// Construcciónd e una función que agrega una nueva nota y la sobreescribe en el archivo
function agregarNota(titulo, contenido) {
  let notas = [];
  
  if (fs.existsSync(filePath)) {
    // Lectura las notas existentes en el archivo
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  // Adición de una nueva nota
  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  // Sobrescritura del archivo con las notas actualizadas
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('Nota agregada con éxito.');
}

/**
 * Construcción de una función que lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    // Lectura y parseo del contenido del archivo
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    // Impresión de todas las notas
    if (notas.length === 0) {
      console.log('No hay notas guardadas.');
    } else {
      console.log('Notas guardadas:');
      notas.forEach((nota, index) => {
        console.log(`${index + 1}. Título: ${nota.titulo} - Contenido: ${nota.contenido}`);
      });
    }
  } else {
    console.log('No hay notas guardadas.');
  }
}

/**
 * Construcción de una función que elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    // Lectura de las notas del archivo
    const data = fs.readFileSync(filePath, 'utf8');
    let notas = JSON.parse(data);

    // Filtración de las notas y eliminación de la que tiene coincidencia con el título
    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    // Condición para sobreescritura del archivo si se han eliminado notas
    if (notasRestantes.length !== notas.length) {
      fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
      console.log(`Nota con título "${titulo}" eliminada.`);
    } else {
      console.log(`No se encontró una nota con el título "${titulo}".`);
    }
  } else {
    console.log('No hay notas para eliminar.');
  }
}

// Aplicación de las funciones
agregarNota('Compras', 'Comprar leche y pan.');
agregarNota('Trabajo', 'Terminar reporte semanal.');
listarNotas();
eliminarNota('Compras');
listarNotas();