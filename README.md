# Challenge Amigo Secreto

## Descripción
Este proyecto implementa un sistema para organizar un "Amigo Secreto". Facilita la asignación aleatoria de amigos secretos y proporciona una interfaz para gestionar el proceso.

## Requisitos
- Java 11 o superior
- Maven (para la gestión de dependencias)
 
# Funcionalidades
- Agregar nombres de participantes a la lista,
- Realizar el sorteo de "Amigo Secreto",
- Mostrar los resultados del sorteo

# Instrucciones de uso
- Abre la aplicación web en tu navegador.
- Ingresa los nombres de los participantes en el campo correspondiente. 
- Haz clic en el botón "Realizar sorteo" para que el sistema asigne a cada participante su "Amigo Secreto".
- Los resultados del sorteo se mostrarán en pantalla.

# Tecnologías utilizadas
- HTML
- CSS
- JavaScript

## Instalación
Sigue estos pasos para instalar y configurar el proyecto:

```bash
# Clonar el repositorio
git clone https://github.com/Alejandro-tech1312/challenge-amigo-secreto.git

# Navegar al directorio del proyecto
cd challenge-amigo-secreto

# Instalar las dependencias
mvn install

Uso 📋
Instrucciones para compilar y ejecutar el proyecto:

# Compilar el proyecto
mvn compile

# Ejecutar el proyecto
mvn exec:java -Dexec.mainClass="com.example.Main"

Contribuir 🤝
¡Contribuciones son bienvenidas! Por favor, sigue estos pasos para contribuir al proyecto

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -m 'Añadir nueva funcionalidad').
Sube los cambios (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.

Licencia 📝
Este proyecto está licenciado bajo los términos de la MIT License.

Explicación del Código 🛠️
Archivos Principales:

Main.java: Contiene el método principal que inicia la aplicación.
SecretSanta.java: Implementa la lógica para asignar amigos secretos.

Funciones y Métodos Clave
asignarAmigosSecretos: Asigna amigos secretos de manera aleatoria.

Resumen Final:

1.Inicializamos la lista de amigos.
2.Agregamos amigos a la lista con una entrada de texto.
3.Realizamos el sorteo.
4.Mostramos el resultado.
5.Reiniciamos el juego mediante el botón "Reiniciar Juego"
