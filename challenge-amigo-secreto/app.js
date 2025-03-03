// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre !== "") {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    }     
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("name-item");
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
        return;
    }

    let participantes = [...amigos];
    for (let i = participantes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [participantes[i], participantes[j]] = [participantes[j], participantes[i]];
    }

    let asignaciones = {};
    for (let i = 0; i < participantes.length; i++) {
        asignaciones[participantes[i]] = participantes[(i + 1) % participantes.length];
    }

    mostrarResultados(asignaciones);
}

function mostrarResultados(asignaciones) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    // Ocultar la lista de amigos
    document.getElementById("listaAmigos").style.display = "none";

    for (let participante in asignaciones) {
        const li = document.createElement("li");
        li.textContent = `El amigo secreto sorteado es ${asignaciones[participante]}`;
        li.classList.add("result-item");
        resultado.appendChild(li);
        break; // Detenemos después de agregar el primer resultado
    }
}

function reiniciarJuego() {
    amigos = []; // Vaciar el array de amigos
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").style.display = "block"; // Mostrar la lista nuevamente
}



