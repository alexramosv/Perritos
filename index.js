document.querySelector(".add-doggo").addEventListener("click", onClick);

function onClick (_event) {
  const perretes = "https://dog.ceo/api/breeds/image/random";
  fetch(perretes)
  .then (function (imagen) {
    return imagen.json();
  })
  .then (function (json) {
    const img = document.createElement("img");
    img.alt = "perretes bonitos";
    img.src = json.message;
    document.querySelector(".doggos").appendChild(img);
  })
};
