start ();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
  document.querySelector(".listBreeds").addEventListener("click", onClickBreeds);
};

function onClick (_event) {
  const perretes = "https://dog.ceo/api/breeds/image/random";

  fetch(perretes)
  .then (toJason)
  .then (appendImgDom)
};

function onClickBreeds (_event) {
  const listadoPerretes = "https://dog.ceo/api/breeds/list/all";
  console.log(listadoPerretes)

  fetch(listadoPerretes)
  .then (toJason)
  .then (appendListDom)
};
  
function toJason (apiResponse) {
  console.log(apiResponse.json())
  return apiResponse.json(); 
};

function appendListDom(jsonResponse2) {
  const list = makeListFrom(jsonResponse2.message);
  console.log(list);
  document.querySelector(".listBreeds").appendChild(list);
}
  
function makeListFrom (dogsUrl) {
  const lista = document.createElement("list");
  lista.alt = "lista de perretes bonitos";
  lista.src = dogsUrl;
  console.log(lista);
  return lista;
  
 };

function appendImgDom(jsonResponse) {
  const img = makeImageFrom(jsonResponse.message);
  document.querySelector(".doggos").appendChild(img);
}



function makeImageFrom (dogUrl) {
  const image = document.createElement("img");
  image.alt = "perretes bonitos";
  image.src = dogUrl;
  return image;
 };


// list breeds comunicarse cn url de list/all 







/*
----------------------------------------------------------------------------------------------------------------
Solución creada por mí con lo de las funciones del .then
----------------------------------------------------------------------------------------------------------------
function onClick (_event) {
  const perretes = "https://dog.ceo/api/breeds/image/random";


  fetch(perretes)
  .then (toJason)
  .then (monkey)
  .then (DonkeyKong)
};


function toJason (imagen) {
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
  .then (toJason)
  .then (function (jsonResponse) {
    const img = monkey(jsonResponse.message);
    document.querySelector(".doggos").appendChild(img);
  })
};


function toJason (imagen) {
  return imagen.json();
};

function monkey (dogUrl) {
  const img = document.createElement("img");
  img.alt = "perretes bonitos";
  img.src = json.message;
  return img;
};

*/




