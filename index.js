start ();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
};

function onClick (_event) {
  const perretes = "https://dog.ceo/api/breeds/image/random";

  fetch(perretes)
  .then (toJason)
  .then (appendImgDom)
};
  
function toJason (apiResponse) {
  return apiResponse.json(); 
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




