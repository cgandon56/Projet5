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
console.log(addEventListener);
if (document.querySelector("#quantity").reportValidity() && // message doit être supérieur à 1 et inférieur ou égal à 100
    document.querySelector("#colors").reportValidity())
addSofa(idProduct);
})
}) ;
}  ;
article();

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

//création localstorage
let objectCart={}


//Ajouter des articles dans le panier
function addSofa(product)  {
    let color = document.querySelector("#colors").value; 
    let quantity = document.querySelector("#quantity").value; 
    let cart = this.getSofa(); 
     if (color != "") {let foundProduct = cart.find(p => p.idProduct == product  &&  p.color == color);
        if(foundProduct){
            for (i = 0; i < cart.length; i++) {
                if (cart[i].idProduct == product && cart[i].color == color) {
                    cart[i].quantity = parseInt(cart[i].quantity) + parseInt(quantity);
                }
            } 
        }
        else{
            cart.push({color: color, quantity : quantity, idProduct : product});  
        }
     }   
    saveSofa(cart);
    }


   

    
/*let foundProduct = cart.find(p => p.productId == product  &&  p.color == color);
if(foundProduct){

    for (i = 0; i < cart.length; i++) {
        if (cart[i].productId == product && cart[i].color == color) {
            cart[i].quantity = parseInt(cart[i].quantity) + parseInt(quantity);
        }
    } 
} */






//Sauver et récupérer le panier
function saveSofa(cart){ //sauver le panier 
    localStorage.setItem("cart", JSON.stringify(cart));//stringify=prend en objet et le transforme en chaine de caractères pour l'enregistrer
}

function getSofa(){// récupérer
    let cart = localStorage.getItem("cart");
    if(cart == null){
        return [];
    }else{ 
       return JSON.parse(cart) ;
    }
}









