//URLSearchParams.get()
//Ajout de l'id des produits à l'url
let params = new URL(document.location).searchParams;
let idProduct = params.get("id");


// Récupération de adresse URL 
async function article() {
fetch(`http://localhost:3000/api/products/${idProduct}`)//adresse URL à aller chercher
.then(response => response.json())// réponse du résultat en json
.then((data)=> {
    console.log(data) ;



//Sélection des sections et affichage des détails

let image = (document.querySelector(".item__img"));
console.log(image);
image.innerHTML=`<img src="${data.imageUrl}" alt="${data.altTxt}">`;
let title = (document.querySelector("#title"));
console.log(title);
title.innerHTML = `${data.name}`;
let price = (document.querySelector("#price"));
console.log(price);
price.innerHTML= `${data.price}`;
let description = (document.querySelector("#description"));
console.log(description);
description.innerHTML=`${data.description}`;
}
)};
article();











