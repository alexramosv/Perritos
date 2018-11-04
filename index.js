start ();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
  document.querySelector(".listBreeds").addEventListener("click", onClickBreeds);
  document.querySelector("#breed-container").addEventListener("change", onChange);
};

function onClick (_event) {
  const perretes = "https://dog.ceo/api/breeds/image/random";

  fetch(perretes)
  .then (toJson)
  .then (appendImgDom)
};

function onClickBreeds (_event) {
  const listadoPerretes = "https://dog.ceo/api/breeds/list/all";
  //console.log(listadoPerretes)

  fetch(listadoPerretes)
  .then (toJson)
  .then ( function (jsonResponse) {
    const breeds = jsonResponse.message;
    const label = document.createElement("label");
    label.htmlFor="breed-select";
    label.innerText = "Elige una raza: 👉👉";
    document.querySelector("#breed-container").appendChild(label);
    
    const select = document.createElement("select");
    select.id="breed-select";
    document.querySelector("#breed-container").appendChild(select);

    const option = document.createElement("option");
    option.value ="";
    option.innerText= "👇🐶🎃 Please choose an option below 👇🐶🎃";
    document.querySelector("#breed-select").appendChild(option);

    const selectedBreed = Object.keys(breeds);
    selectedBreed.forEach(function(breed) {
      const option3 = document.createElement("option");
      option3.value =breed;
      option3.innerText= primeraLetraMayuscula(breed.toLowerCase());
      document.querySelector("#breed-select").appendChild(option3);
      console.log(breed)
    });
  })  
};

function primeraLetraMayuscula(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
};



function onChange (event) {
  const selectedBreed = event.target.selectedOptions[0].value;
   const BREED_IMAGES_URL = `https://dog.ceo/api/breed/${selectedBreed}/images`;
   
   fetch(BREED_IMAGES_URL)
     .then(toJson)
     .then(function(jsonResponse) {
       const imagesUrl = jsonResponse.message;
       const sacarFoto = imagesUrl[darNuevaFoto(imagesUrl.length - 1)];
       const img = makeImageFrom(sacarFoto);
       document.querySelector(".doggos").appendChild(img);
     });
};

function darNuevaFoto(max) {
  return Math.floor(Math.random() * Math.floor(max));   
};

function toJson (apiResponse) {
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




