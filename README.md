Aquí te detallo cada paso que realizamos para llegar al resultado final:
Paso 1: Crear una lista de amigos
Inicializamos una lista vacía para almacenar los nombres de los amigos que participarán en el sorteo.

let amigos = [];

Paso 2: Función para agregar amigos
Creamos una función agregarAmigo que obtiene el nombre ingresado en el campo de texto, lo valida y lo añade a la lista de amigos. Luego, actualiza la visualización de la lista.

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre !== "") {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    }     
}
Paso 3: Función para actualizar la lista de amigos
Esta función toma la lista de amigos y actualiza el contenido del elemento HTML correspondiente para mostrar todos los nombres ingresados.

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
Paso 4: Función para sortear el amigo secreto
Esta función mezcla la lista de participantes de manera aleatoria y asigna un amigo secreto a cada uno. Luego, llama a la función mostrarResultados para mostrar el resultado.

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

    // Retrasar el reinicio del juego para que se vea el resultado
    setTimeout(reiniciarJuego, 5000); // 5000 ms = 5 segundos
}
Paso 5: Función para mostrar los resultados
Modificamos esta función para que solo muestre un resultado y oculte la lista de amigos ingresados. El mensaje se muestra de forma personalizada como "El amigo secreto sorteado es...".

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
Paso 6: Función para reiniciar el juego
Esta función limpia la lista de amigos y los resultados, y vuelve a mostrar el campo de entrada para que el juego pueda iniciarse de nuevo.

function reiniciarJuego() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("listaAmigos").style.display = "block"; // Mostrar la lista nuevamente al reiniciar
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
}

Resumen Final:

1.Inicializamos la lista de amigos.
2.Agregamos amigos a la lista con una entrada de texto.
3.Actualizamos la visualización de la lista de amigos.
4.Realizamos el sorteo mezclando la lista y asignando amigos secretos.
5.Mostramos el resultado de manera personalizada y ocultamos la lista de amigos.
6.Reiniciamos el juego automáticamente después de unos segundos para permitir un nuevo sorteo.
