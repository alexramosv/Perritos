start ();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
  document.querySelector(".listBreeds").addEventListener("click", onClickBreeds);
};

function onClick (_event) {
  const perretes = "https://dog.ceo/api/breeds/image/random";

  fetch(perretes)
  .then (toJson)
  .then (appendImgDom)
};

function onClickBreeds (_event) {
  const listadoPerretes = "https://dog.ceo/api/breeds/list/all";
  console.log(listadoPerretes)

  fetch(listadoPerretes)
  .then (toJson)
  .then ( function (jsonResponse) {
    const breeds = jsonResponse.message;
    console.log(breeds);})
};
  
function toJson (apiResponse) {
  return apiResponse.json(); 
};

function appendImgDom(jsonResponse) {
  const img = makeImageFrom(jsonResponse.message);
  document.querySelector(".doggos").appendChild(img);
}

/*
function appendListDom(jsonResponse) {
  const list = makeListFrom(jsonResponse.message);
  console.log(list);
  document.querySelector(".listBreeds").appendChild(list);
}
*/
  
function makeImageFrom (dogUrl) {
  const image = document.createElement("img");
  image.alt = "perretes bonitos";
  image.src = dogUrl;
  return image;
 };

function makeListFrom (dogsUrl) {
  const lista = document.createElement("list");
  lista.alt = "lista de perretes bonitos";
  lista.src = dogsUrl;
  console.log(lista);
  return lista;
  
 };






// list breeds comunicarse cn url de list/all 







/*
----------------------------------------------------------------------------------------------------------------
Solución creada por mí con lo de las funciones del .then
----------------------------------------------------------------------------------------------------------------
function onClick (_event) {
  const perretes = "https://dog.ceo/api/breeds/image/random";


  fetch(perretes)
  .then (toJson)
  .then (monkey)
  .then (DonkeyKong)
};


function toJson (imagen) {
  return imagen.json();
};

function monkey (json) {
  const img = document.createElement("img");
  img.alt = "perretes bonitos";
  img.src = json.message;
  return img;
};

function DonkeyKong (img) {
  document.querySelector(".doggos").appendChild(img);
};

*/


/*

function onClick (_event) {
  const perretes = "https://dog.ceo/api/breeds/image/random";

  fetch(perretes)
  .then (toJson)
  .then (function (jsonResponse) {
    const img = monkey(jsonResponse.message);
    document.querySelector(".doggos").appendChild(img);
  })
};


function toJson (imagen) {
  return imagen.json();
};

function monkey (dogUrl) {
  const img = document.createElement("img");
  img.alt = "perretes bonitos";
  img.src = json.message;
  return img;
};

*/




