// Entregable 3

// Arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// Productos que cuestan menos de $100
const menoresACien = productos.filter((producto) => producto.precio < 100);
console.log(menoresACien);

// Productos filtrados ordenados alfabeticamente

const menoresACienOrdenados = menoresACien.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(menoresACienOrdenados);

// Arreglo que contiene solo los nombres de los productos

const nombreProductos = menoresACienOrdenados.map((producto) => producto.nombre);
console.log(nombreProductos);

// Verificar si hay productos que pertenecen a la categoría de electrónica

const hayProductosDeElectronica = productos.some((producto) => producto.categoria === "Electrónica");
console.log(hayProductosDeElectronica);
