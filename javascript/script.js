function cambiarTexto() {
    const texto = document.querySelector("#sobre-mi p");
    texto.innerText = "Me gusta programar y crear soluciones con tecnología.";
}

let visible = true;

function toggleInfo() {
    const texto = document.querySelector("#sobre-mi p");

    if (visible) {
        texto.innerText = "";
    } else {
        texto.innerText = "Estudiante con interés en el desarrollo de software y la informática, enfocado en comprender elfuncionamiento de los sistemas y en crear soluciones prácticas mediante la tecnología.";
    }

    visible = !visible;
}

window.onload = function() {
    alert("Bienvenido a mi portafolio");
};