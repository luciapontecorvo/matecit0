// DOM QUE LE FALTA CSS

// document.addEventListener("DOMContentLoaded", function() {

//   // -----JSON de recursos-----
// const recursos = [
//   {
//       "id": 1,
//       "nombre": "Mate Camionero Negro",
//       "precio": 3500,
//       "img":
//       "../multimedia/mates/matecamioneropremium.jpeg",
//       "cantidad": 1
//   },
//   {
//       "id": 2,
//       "nombre": "Mate Alpaca",
//       "precio": 3500,
//       "img":
//       "../multimedia/mates/matealpaca.jpeg",
//       "cantidad": 1
//   },
//       {
//       "id": 3,
//       "nombre": "Mate Escudo Argentina",
//       "precio": 3500,
//       "img":
//       "../multimedia/mates/matecamioneropremium.jpeg",
//       "cantidad": 1
//       },
//       {
//       "id": 4,
//       "nombre": "Termo Personalizado",
//       "precio": 10000,
//       "img":
//       "../multimedia/termos/matecamioneropremium.jpeg",
//       "cantidad": 1
//       },
//       {
//       "id": 5,
//       "nombre": "Termo Stanley Verde",
//       "precio": 10000,
//       "img":
//       "../multimedia/termos/matecamioneropremium.jpeg",
//       "cantidad": 1
//       },
//       {
//       "id": 6,
//       "nombre": "Termo Stanley Gold",
//       "precio": 10000,
//       "img":
//       "../multimedia/termos/matecamioneropremium.jpeg",
//       "cantidad": 1
//       },
//       {
//       "id": 7,
//       "nombre": "Bombilla Acero Inoxidable",
//       "precio": 1500,
//       "img":
//       "../multimedia/bombillas/matecamioneropremium.jpeg",
//       "cantidad": 1
//       },
//       {
//       "id": 8,
//       "nombre": "Bombilla Alpaca",
//       "precio": 1500,
//       "img":
//       "../multimedia/bombillas/matecamioneropremium.jpeg",
//       "cantidad": 1
//       },
//       {
//       "id": 9,
//       "nombre": "Bombillon",
//       "precio": 1500,
//       "img":
//       "../multimedia/bombillas/matecamioneropremium.jpeg",
//       "cantidad": 1
//       },
//       {
//       "id": 10,
//       "nombre": "Matera Marron",
//       "precio": 5000,
//       "img":
//       "../multimedia/materas/matecamioneropremium.jpeg",
//       "cantidad": 1
//       },
//       {
//       "id": 11,
//       "nombre": "Matera Negra",
//       "precio": 5000,
//       "img":
//       "../multimedia/materas/matecamioneropremium.jpeg",
//       "cantidad": 1
//       },
//       {
//       "id": 12,
//       "nombre": "Yerba Canarias",
//       "precio": 1000,
//       "img":
//       "../multimedia/yerbas/matecamioneropremium.jpeg",
//       "cantidad": 1
//       },
//       {
//       "id": 13,
//       "nombre": "Yerba Sara tradicional",
//       "precio": 1000,
//       "img":
//       "../multimedia/yerbas/matecamioneropremium.jpeg",
//       "cantidad": 1
//       },
//       {
//       "id": 14,
//       "nombre": "Yerba Baldo",
//       "precio": 1000,
//       "img":
//       "../multimedia/yerbas/matecamioneropremium.jpeg",
//       "cantidad": 1
//       }
// ];

// const listaRecursos = document.getElementById('lista-recursos'); 

// // Recorre el JSON y crea elementos HTML para cada recurso.
// recursos.forEach(recurso => {
// // Crea un div para representar cada recurso.
// const divRecurso = document.createElement('div');
// divRecurso.classList.add('recurso'); 

// // Crea elementos HTML para mostrar la información del recurso.
// const nombreElement = document.createElement('h3');
// nombreElement.textContent = recurso.nombre;

// const precioElement = document.createElement('p');
// precioElement.textContent = `Precio: $${recurso.precio}`;

// const imgElement = document.createElement('img');
// imgElement.src = recurso.img;
// imgElement.alt = recurso.nombre;

// // Agrega los elementos al div del recurso.
// divRecurso.appendChild(nombreElement);
// divRecurso.appendChild(precioElement);
// divRecurso.appendChild(imgElement);

// // Agrega el div del recurso a la lista en el DOM.
// listaRecursos.appendChild(divRecurso);
// });

// });


// buscador

const products = [
  { name: "Mate Camionero Negro" },
  { name: "Mate Alpaca" },
  { name: "Mate Escudo Argentina" },
  { name: "Mate Camionero Negro" },
  { name: "Termo Personalizado" },
  { name: "Termo Stanley Verde" },
  { name: "Termo Stanley Gold" },
  { name: "Bombilla Acero Inoxidable" },
  { name: "Bombilla Alpaca" },
  { name: "Bombillon" },
  { name: "Matera Marron" },
  { name: "Matera Negra" },
  { name: "Yerba Canarias" },
  { name: "Yerba Sara Tradicional" },
  { name: "Yerba Baldo" },
];

const searchInput = document.getElementById("searchInput");
const resultList = document.getElementById("resultsList");
const noResults = document.getElementById("noResults");

const handleSearch = () => {
  const searchTerm = searchInput.value.toLowerCase().split(' ');
  const filteredProducts = products.filter(product => {
      const productName = product.name.toLowerCase();
      return searchTerm.every(word => productName.includes(word));
  });

  resultList.innerHTML = "";

  if (filteredProducts.length === 0) {
      noResults.style.display = "block";
  } else {
      filteredProducts.forEach(product => {
          const li = document.createElement("li");
          li.textContent = product.name;
          resultList.appendChild(li);
      });
      noResults.style.display = "none";
  }

  if (searchInput.value === "") {
      resultList.innerHTML = "";
  }
};

searchInput.addEventListener("input", handleSearch);

// ------------ORDENAR---------

let isSorted = false; // Variable para rastrear el estado de ordenación

// Función para ordenar alfabéticamente o desordenar los elementos .box
function sortOrUnsortBoxes() {
  const boxContainer = document.querySelector('.box-container');
  const boxes = Array.from(boxContainer.querySelectorAll('.box'));

  if (!isSorted) {
      // Ordenar alfabéticamente si no están ordenados
      boxes.sort((a, b) => {
          const titleA = a.querySelector('h3').textContent.toLowerCase();
          const titleB = b.querySelector('h3').textContent.toLowerCase();
          return titleA.localeCompare(titleB);
      });
  } else {
      // Desordenar si ya están ordenados
      boxes.sort(() => Math.random() - 0.5);
  }

  // Elimina los elementos existentes del contenedor
  while (boxContainer.firstChild) {
      boxContainer.removeChild(boxContainer.firstChild);
  }

  // Agrega los elementos ordenados o desordenados de nuevo al contenedor
  boxes.forEach(box => {
      boxContainer.appendChild(box);
  });

  // Cambia el estado de ordenación
  isSorted = !isSorted;
}

// Agregar un evento de clic al botón para activar la ordenación o desordenación
const sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', sortOrUnsortBoxes);


// -----------

// Mostrar el listado de recursos? (sólo se muestra por consola)

const apiUrl = 'data.json';


fetch(apiUrl)
.then(response => {
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Error al acceder a la API. Código de respuesta: ' + response.status);
  }
})
.then(recursos => {
  recursos.forEach(recurso => {
    console.log(recurso);
  });
})
.catch(error => {
  console.error('Error:', error);
});