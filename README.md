# Cardify

* **Track:** _Front-end especialización_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

Implementar una funcion de Javascript EcmaScript 6 que dado un _contenedor_ debe buscar todas las imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

## Para cumplir con el objetivo del proyecto deberas obtener el elemento con (id = "gallery") y pasarlo como parametro a la funcion principal

```
Ejemplo

const obteniendoElElemento = document.getElementById("miId")

const nombreDeTuFuncion =(obteniendoElElemento) => {
  Inicia tu proyecto...
}
```

## Flujo de trabajo

1. Debes realizar un [**fork**](https://github.com/Jonhks/cardify.git)
   de este repositorio.

2. Luego deberás **clonar** tu fork en tu máquina. Recuerda que el comando a usar
   es `git clone` y su estructura normalmente se ve así:

   ```bash
   git clone https://github.com/<nombre-de-usuario>/cardify.git
   ```

3. Crea tu propia rama y cuando tu producto esté terminado, sube tus cambios a la rama que creaste de ese repositorio y haz un pull request a tu propio master
   (puedes solicitar apoyo de tus profes para este paso).

> Nota: No olvides que es una buena práctica describir tu proyecto en este
> archivo `README.md` :smiley:.

***
## Pseudo código del flujo de trabajo.
1. Acceder al contenedor por clase.
2. Guardar en un array la información del src y en otro la inf del alt, después de guardar la inf se borraran los hijos del contenedor de la galería.
3. Hacer que se iteren los arreglos para ir creando y pintando los elementos en el html.
- Crear una funcion que cree elementos y pasar como parametro el value del indice del arreglo que contiene el src y el alt
- La función que crea los elementos lo hará por medio de la platilla de texto. En la platilla de texto se concatenará el valor src y alt, para insertarle la información de los atributos: src y alt en los elementos creados.
