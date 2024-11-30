
let tieneCuenta = prompt("¿Tienes una cuenta? (sí/no)").toLowerCase();


let conoceContrasena = prompt("¿Conoces la contraseña? (sí/no)").toLowerCase();


if (tieneCuenta === "sí" && conoceContrasena === "sí") {
    alert("Acceso concedido.");
} else {
    alert("Acceso denegado.");
}