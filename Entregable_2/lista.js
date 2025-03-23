// Definición de mi arreglo vacío inicial
let listaDeCompras = [];

// Variable que se modifica según el elemento que se desea eliminar
let productoAEliminar = "1 L de leche con proteína";

// Definición de la función que permite agregar items a la lista
const agregarProducto = (producto) => {
    listaDeCompras.push(producto);
    console.log(listaDeCompras);
};

// Adición de items
agregarProducto("1/2 kg de manzana verde");
agregarProducto("1 L de leche con proteína");
agregarProducto("1 L de leche con proteína");
agregarProducto("1 bote de creatina");
agregarProducto("500 g arroz");
agregarProducto("2 aguacates");
agregarProducto("2 aguacates");
agregarProducto("1 pechuga de pollo");

// Definición de la función que permite eliminar items de la lista
const eliminarProducto = (productoAEliminar) => {
    listaDeCompras = listaDeCompras.filter(item => item !== productoAEliminar);
    console.log(listaDeCompras); 
};

// Eliminación del producto no deseado
eliminarProducto(productoAEliminar);

// Definición de un elemento Set, para evitar duplicados en la lista final
let listaSinDuplicados = [...new Set(listaDeCompras)];
//Impresión del conjunto final (sin duplicados)
console.log(listaSinDuplicados);

// Separación entre los arreglos y el desglose de cada elemento de la lista final
console.log("---------------------------");

// Definición de la función que muestra cada elemento del conjunto individualmente
const mostrarLista = () => {
    listaSinDuplicados.forEach(item => console.log(item));
}

// Desglose de items de la lista final
mostrarLista();