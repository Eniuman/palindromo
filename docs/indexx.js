import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function verificarPalindromo() {
    let texto = document.getElementById("palabra").value;
    let limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, ''); // elimina espacios y caracteres no alfanuméricos
    let invertido = limpio.split('').reverse().join('');

   // let resultado = document.getElementById("resultado");
    if (texto === "") {
      Swal.fire({
        icon: "warning",
        title: "Oye viejo...",
        text: "¡Escribe algo antes de comprobar!",
        confirmButtonColor: "#6c5ce7",
      });
        return; // salir de la función si el campo está vacío
    }
    if (limpio === invertido && limpio.length > 0) {

        Swal.fire({
        icon: "success",
        title: "¡Sí es un palíndromo! 🎉",
        text: `"${texto}" se lee igual al revés.`,
        confirmButtonColor: "#0984e3",
    });
    } else {
    Swal.fire({
            icon: "error",
            title: "No es un palíndromo",
            text: "Sigue intentando con otra palabra o frase.",
            confirmButtonColor: "#d63031",
    });
    }
}

// Cuando el DOM esté cargado, se enlaza el evento al botón
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button.btn").addEventListener("click", verificarPalindromo);
});
