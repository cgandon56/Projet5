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

function getDetailsSofa(idProduct){
    return  fetch(`http://localhost:3000/api/products/${idProduct}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
                    return data;
        })
        .catch(error => console.warn(error));

}

function listCart(){
    for (i = 0; i <cart.length; i++){
        let quantity = cart[i].quantity
        let color = cart[i].color
        let idProduct = cart[i].idProduct

        getDetailsSofa(cart[i].idProduct).then(response => {


    document.querySelector("#cart__items").innerHTML +=
    `<article class="cart__item" data-id= "${idProduct}" data-color="${color}">
<div class="cart__item__img">
  <img src=${response.imageUrl}  alt= "Photographie d'un canapé">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__description">
    <h2>${response.name}</h2>
    <p>${color}</p>
    <p>${response.price}</p>
  </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Qté : </p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantity}">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
    </div>
  </div>
</div>
</article>`

});
    }
}

listCart()


//Modifier la quantité
function changeQuantity(product, quantity){
    let cart = getSofa();  
    let foundProduct = cart.find(p=>p.id != product.id)
    if(foundProduct != undefined){ //gestion de la quantité
        foundProduct.quantity += quantity;
        if(foundProduct.quantity <= 0){
            removeFromSofa(foundProduct);
        }else{
            saveSofa(cart);
        }
    }
    }


// supprimer un article
function removeFromSofa (idProduct){ 
    let cart = getSofa();
    cart = cart.filter(p => p.id != idProduct)
      saveSofa(cart);
}

document.getElementsByClassName("deleteItem").addEventListener("click", function(){;
        removeFromSofa();}) 
    
function saveSofa(cart){ //sauver le panier 
    localStorage.setItem("cart", JSON.stringify(cart));//stringify=prend en objet et le transforme en chaine de caractères pour l'enregistrer
}


/*
// Calculer le nombre d'articles dans le panier
function getNumberProduct(){
    let cart = getSofa(); 
    let number = 0;
    for(let product of cart)
    number += product.quantity;
    return number;
}



// Calcul du prix
function getTotalPrice(){
    let cart = getSofa(); 
    let total = 0;
    for(let product of cart)
    total += product.quantity * product.price;
    return total;
}

/*

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


  


 






/*

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
    let foundProduct = cart.find(p=>p.id != product.id)
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
        let cart = getSofa(); 
        let number = 0;
        for(let product of cart)
        number += product.quantity;
        return number;
    }

    // Calcul du prix
    function getTotalPrice(){
        let cart = getSofa(); 
        let total = 0;
        for(let product of cart)
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


//Gestion de l'affichage et les interactions de la page contact
document.querySelector("#order").addEventListener("click",function(){
    var valid = true;
    for(let input of document.querySelectorAll(".form input,.form textarea")){
        valid &= input.reportValidity(); // va afficher un message pour dire que le champ n'est pas correct
        if(!valid){
            break;
        }
    }
    if(valid){
        alert("votre commande est confirmée");
    }
});





/*
document.querySelector('.form input[type="submit"]').addEventListener("click",function(){
    var valid = true;
    for(let input of document.querySelectorAll(".form input,.form textarea")){
        valid &= input.reportValidity(); // va afficher un message pour dire que le champ n'est pas correct
        if(!valid){
            break;
        }
    }
    if(valid){
        alert("votre commande est confirmée");
    }
});*/

















