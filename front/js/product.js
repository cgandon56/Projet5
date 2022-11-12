//URLSearchParams.get()
//Ajout de l'id des produits à l'url
const params = new URL(document.location).searchParams;
let idProduct = params.get("id");


// Récupération de adresse URL 
async function article() {
fetch(`http://localhost:3000/api/products/${idProduct}`)//adresse URL à aller chercher
.then(response => response.json())// réponse du résultat en json
.then((data)=> {
    console.log(data);
    showdata


//Sélection des sections et affichage des détails

}
)};
article();

function showdata(data){
const image = (document.querySelector(".item__img"));
console.log(image);
image.innerHTML=`<img src="${data.imageUrl}" alt="${data.altTxt}">`;
const title = (document.querySelector("#title"));
console.log(title);
title.innerHTML = `${data.name}`;
const price = (document.querySelector("#price"));
console.log(price);
price.innerHTML= `${data.price}`;
const description = (document.querySelector("#description"));
console.log(description);
description.innerHTML=`${data.description}`;
}












