/*CAMBIOS EN LA DESCRIPCION SOBRE MI*/
const textoOriginal = "Estudiante con interés en el desarrollo de software y la informática, enfocado en comprender el funcionamiento de los sistemas y en crear soluciones prácticas mediante la tecnología.";

let textoCambiado = false;
let visible = true;

function cambiarTexto() {
    const texto = document.querySelector("#sobre-mi p");

    if (!textoCambiado) {
        texto.innerText = "Me gusta programar y crear soluciones con tecnología.";
    } else {
        texto.innerText = textoOriginal;
    }

    textoCambiado = !textoCambiado;
}

function toggleInfo() {
    const texto = document.querySelector("#sobre-mi p");

    if (visible) {
        texto.innerText = "";
    } else {
        // aquí respetamos si estaba cambiado o no
        texto.innerText = textoCambiado 
            ? "Me gusta programar y crear soluciones con tecnología."
            : textoOriginal;
    }

    visible = !visible;
}


/*USO DEL BOTON ENVIAR EN EL APARTADO DE CONTACTO*/
document.getElementById("form-contacto").addEventListener("submit", function(e) {
    e.preventDefault(); // evita que se recargue la página

    const nombre = this.querySelector("input[type='text']").value;
    const correo = this.querySelector("input[type='email']").value;

    alert("Gracias " + nombre + ", te contactaré en " + correo);

    this.reset(); // limpia el formulario
});