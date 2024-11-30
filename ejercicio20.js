// Definición de la función flecha
const calcularPrecioConIVA = (precio) => {
    const iva = precio * 0.12; // Calcular el 12% de IVA
    const precioTotal = precio + iva; // Sumar el IVA al precio original
    console.log(`El precio total con IVA es: ${precioTotal.toFixed(2)}`); // Mostrar el precio total
};

// Ejemplo de uso de la función
calcularPrecioConIVA(100); // Cambia el precio según lo desees