/* CAMBIOS EN LA DESCRIPCION SOBRE MI */

// Texto original que aparece en la sección "Sobre mí"
const textoOriginal = "Estudiante con interés en el desarrollo de software y la informática, enfocado en comprender el funcionamiento de los sistemas y en crear soluciones prácticas mediante la tecnología.";

// Variable que indica si el texto ya fue cambiado
let textoCambiado = false;

// Variable que controla si el texto está visible o no
let visible = true;

// Función que cambia el texto al presionar el botón
function cambiarTexto() {
    // Selecciona el párrafo dentro de la sección "sobre-mi"
    const texto = document.querySelector("#sobre-mi p");

    // Si el texto no ha sido cambiado, lo cambia
    if (!textoCambiado) {
        texto.innerText = "Me gusta programar y crear soluciones con tecnología.";
    } else {
        // Si ya estaba cambiado, vuelve al original
        texto.innerText = textoOriginal;
    }

    // Invierte el estado (true/false)
    textoCambiado = !textoCambiado;
}

// Función para mostrar u ocultar el texto
function toggleInfo() {
    const texto = document.querySelector("#sobre-mi p");

    // Si está visible, lo oculta
    if (visible) {
        texto.innerText = "";
    } else {
        // Si estaba oculto, lo muestra respetando si estaba cambiado o no
        texto.innerText = textoCambiado
            ? "Me gusta programar y crear soluciones con tecnología."
            : textoOriginal;
    }

    // Cambia el estado de visibilidad
    visible = !visible;
}


/* USO DEL BOTON ENVIAR EN EL APARTADO DE CONTACTO */

// Agrega un evento al formulario cuando se envía
document.getElementById("form-contacto").addEventListener("submit", function (e) {

    e.preventDefault(); // Evita que la página se recargue al enviar

    // Obtiene el valor del input de texto (nombre)
    const nombre = this.querySelector("input[type='text']").value;

    // Obtiene el valor del input de correo
    const correo = this.querySelector("input[type='email']").value;

    // Muestra un mensaje emergente con los datos ingresados
    alert("Gracias " + nombre + ", te contactaré en " + correo);

    // Limpia el formulario después de enviarlo
    this.reset();
});