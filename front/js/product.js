//URLSearchParams.get()
//Ajout de l'id des produits à l'url
async function article() {
const params = new URL(document.location).searchParams;
let idProduct = params.get("id");


// Récupération de adresse URL 

fetch(`http://localhost:3000/api/products/${idProduct}`)//adresse URL à aller chercher
.then(response => response.json())// réponse du résultat en json
.then((data)=> {
    console.log(data);
    showData(data)
    const button = (document.querySelector("#addToCart"));
button.addEventListener("click", function() {
if (document.querySelector("#quantity").reportValidity() &&
document.querySelector("#colors").reportValidity()) {
document.querySelector("#quantity").value;
document.querySelector("#colors").value;
addSofa(product);
}
}) ;
})  ;
}


//Déclaration et Affichage des détails avec la fonction showData
function showData(data){
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
const color = (document.querySelector("#colors"));
for (i = 0; i < data.colors.length; i++) {//Choix de la couleur
  color.innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`;
}
}

article();


//Ajouter des articles dans le panier
function addSofa(product)  {
    let sofa = getSofa();    
let foundProduct = sofa.find(p => p._id == product._id && p.colors == product.colors); //chercher un élément sur un tableau par rapport à une condition
if(foundProduct != undefined){
foundProduct.quantity += product.quantity;
if (product.quantity > 100) {
product.quantity = 100;
}  else{
sofa.push(product);
}   
saveSofa(sofa);
}
}

//Sauver et récupérer le panier
function saveSofa(sofa){ //sauver le panier 
    localStorage.setItem("sofa", JSON.stringify(sofa));//stringify=prend en objet et le transforme en chaine de caractères pour l'enregistrer
}

function getSofa(){// récupérer
    let sofa = localStorage.getItem("sofa");
    if(sofa == null){
        return [];
    }else{
       return JSON.parse(sofa);
    }
}









