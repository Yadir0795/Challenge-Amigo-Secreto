// Yadir Garcia Cordoba 
// Challenge #1

// Array solicitado para guardar los nombres
let listaAmigos = [];


function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre valido.");
        return;
    }

    // Agregar el nombre a la lista si no esta vacio
    listaAmigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    mostrarLista();
}

function validarEntrada(input) {
    // Valida que no se escriban numeros
    input.value = input.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, '');
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    listaAmigos.forEach((nombre) => {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear."); // Verifica que exista por lo menos un amigo 
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); 
    let amigoSecreto = listaAmigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>El amigo secreto es: <strong>${amigoSecreto}</strong></p>`;
}
