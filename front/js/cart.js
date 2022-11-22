
//Récupération du produit
let cart = getSofa(); console.log(cart);


function getSofa(){// fonction récupérer le panier
    let cart = localStorage.getItem("cart");   
    if(cart == null){
    let h1 = document.querySelector("h1");
    h1.innerText = "Votre panier est vide";
    }else{
        return JSON.parse(cart);
    }
}



fetch(`http://localhost:3000/api/products`)//adresse URL à aller chercher
.then( data => data.json()
.then(jsoncart =>{ console.log(cart);
        for (i = 0; i <cart.length; i++){ 
    document.querySelector("#cart__items").innerHTML +=
    `<article class="cart__item" data-id= "${cart[i].idProduct}" data-color="${cart[i].colors}">
<div class="cart__item__img">
  <img src=${jsoncart[i].imageUrl}  alt= "Photographie d'un canapé">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__description">
    <h2>${jsoncart[i].name}</h2>
    <p>${cart[i].color}</p>
    <p>${jsoncart[i].price}</p>
  </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Qté : </p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cart[i].quantity}">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
    </div>
  </div>
</div>
</article>`

}
}));


/*



// Déclaration et affichage du panier 
/*
let section = (document.querySelector("#cart__items")); 
for (i = 0; i <cart.length; i++){
    const article =

`<article class="cart__item" data-id= "{idProduct}" data-color="{product-color}">
<div class="cart__item__img">
  <img src= http://localhost:3000/api/products/${cart[i].imageUrl}  alt= "Photographie d'un canapé">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__description">
    <h2>${cart[i].name}</h2>
    <p>${cart[i].colors}</p>
    <p>${cart[i].price}</p>
  </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Qté : </p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cart[i].quantity}">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
    </div>
  </div>
</div>
</article>`
section.innerHTML += article;
}


//fonction modifier la quantité
function changeQuantity(product, quantity){
   
    if(foundProduct != undefined){ //gestion de la quantité
        foundProduct.quantity += quantity;
        if(foundProduct.quantity <= 0){
            removeFromSofa(foundProduct);
        }else{
            saveSofa(cart);
        }
    }
    }


  


 








//Gestion du panier

//Ajouter, sauver et récupérer le panier
function saveSofa(sofa){ //sauver le panier 
    localStorage.setItem("sofa", JSON.stringify(sofa));//stringify=prend en objet et le transforme en chaine de caractères pour l'enregistrer
}


function getSofa(){// fonction récupérer le panier
    let cart = localStorage.getItem("cart"); console.log(cart);
    if(cart == null){
    let h1 = document.querySelector("h1");
    h1.innerText = "Votre panier est vide";

    }else{
       return JSON.parse(cart);
    }
}



// supprimer un article
function removeFromSofa (product){ 
    let sofa = getSofa();
    sofa = sofa.filter(p => p.id != product.id)
    saveSofa(sofa);
}

//Modifier la quantité
function changeQuantity(product, quantity){
    let sofa = getSofa();  
    if(foundProduct != undefined){ //gestion de la quantité
        foundProduct.quantity += quantity;
        if(foundProduct.quantity <= 0){
            removeFromSofa(foundProduct);
        }else{
            saveSofa(sofa);
        }
    }
    }

// Calculer le nombre d'articles dans le panier
    function getNumberProduct(){
        let sofa = getSofa(); 
        let number = 0;
        for(let product of sofa)
        number += product.quantity;
        return number;
    }

    // Calcul du prix
    function getTotalPrice(){
        let sofa = getSofa(); 
        let total = 0;
        for(let product of sofa)
        number += product.quantity * product.price;
        return number;
    }


// récupération du panier en objet mode orienté object
class sofa{
    constructor(){
        let sofa = localStorage.getItem("sofa");
        if(sofa==null){
            this.sofa = [];
        }else{
            this.sofa = JSON.parse(sofa);
        }  
    }
    saveSofa(sofa){  
        localStorage.setItem("sofa", JSON.stringify(this.sofa));
}
addSofa(product){
    let foundProduct = this.sofa.find(p => p.id == product.id);// find=chercher un élement dans un tableau par rapport à une condition
    if(foundProduct != undefined){ //gestion de la quantité
        foundProduct.quantity++;
    }else{
        product.quantity = 1;
        sofa.push(sofa);//pour relancer
    }
    saveSofa(this.sofa);//enregistre dans le panier
}
}*/


/*//Gestion de l'affichage et les interactions de la page contact
document.querySelector('.form input[type="submit"]').addEventListener("click",function(){
    var valid = true;
    for(let input of document.querySelectorAll(".form input,.form textarea")){
        valid &= input.reportValidity();
        if(!valid){
            break;
        }
    }
    if(valid){
        alert("votre commande est confirmée");
    }
});*/
















