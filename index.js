start ();

function start() {
  document.querySelector(".add-doggo").addEventListener("click", onClick);
};

function onClick (_event) {
  const perretes = "https://dog.ceo/api/breeds/image/random";

  fetch(perretes)
  .then (toJason)
  .then (DonkeyKong)
};


function toJason (imagen) {
  return imagen.json();
};

function DonkeyKong (json) {
  const img = document.createElement("img");
  img.alt = "perretes bonitos";
  img.src = json.message;
  document.querySelector(".doggos").appendChild(img);
};