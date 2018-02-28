
let gallery = document.getElementsByClassName('gallery');
let arrayGallery = gallery[0]['childNodes'];
let imagenArray = [];//Arreglo que en cada indice contiene toda la información de los tag img.
for (let index in arrayGallery) {
  if (index % 2 == 1) {
    imagenArray.push(arrayGallery[index]);
  }
}

$('#gallery').empty();//Borrando el contenedor una vez que la información anterior ya se encuentra almanecenada en las variables.
//Esto es para que se puedan escribir los nuevos nodos de esa section.
//Accediendo al atributos de cada imagen y guardandola en un arreglo.
for (let content in imagenArray) {
  let altText = imagenArray[content].alt; //Accediendo al atributo alt.
  let srcText = imagenArray[content].currentSrc; //Accediendo al src.
  let father = document.querySelector('#gallery');
  father =  `<figure>
                <img src="${srcText}" alt="${altText}">
                <figcaption>${altText}</figcaption>
            </figure>`;
  console.log(altText);
  console.log(srcText);
}


/*
let elementHTML = `<p title="${title}">Hello ${you}!</p>`
*/
