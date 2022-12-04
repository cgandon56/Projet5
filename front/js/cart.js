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
         // Suppression d'un produit
         const deleteItemList = document.querySelectorAll(".cart__item__content__settings__delete");
         for(let j=0;j<deleteItemList.length;j++) {
             i = j
             deleteItemList[j].onclick=function() {
                 removeFromSofa(cart,j)
                 saveSofa(cart)
                
             }
         }
         getNumberProduct();
         changeQuantity();
}


         )}
             }
         
listCart()



// fonction supprimer un article
function removeFromSofa (cart,index){
    // let cart = getSofa();
     itemToDelete = document.querySelector(
         `[data-id="${cart[index].idProduct}"][data-color="${cart[index].color}"]`
     );
     cart.splice(index, 1);
         itemToDelete.remove();
         window.location.reload();
 }

 function saveSofa(cart){ //sauver le panier 
    localStorage.setItem("cart", JSON.stringify(cart));//stringify=prend en objet et le transforme en chaine de caractères pour l'enregistrer
}



// Fonction calcul du nombre d'articles dans le panier et du prix total
async function getNumberProduct() {
   //let cart = this.getSofa(); 
   const quantity = document.querySelectorAll(".itemQuantity");
    let number = 0;
          for(let i = 0; i <cart.length; i++){
            let TotalQuantity = cart[i].quantity;
        console.log(TotalQuantity );
        number += parseInt(cart[i].quantity)  ;
    }
    document.querySelector("#totalQuantity").innerText =  number;

    let totalPrice = 0; 
        for (let i = 0; i < cart.length; i++) {
            let idProduct = cart[i].idProduct;           
            response = await getDetailsSofa((idProduct));console.log(response)
      totalPrice += cart[i].quantity * response.price;
    } 
    document.querySelector("#totalPrice").innerHTML = totalPrice;
} 
    
  
// Modifier la quantité
function changeQuantity(){
    const changeList = document.querySelectorAll(".itemQuantity");
    for(let i=0;i<changeList.length;i++) {
        changeList[i].addEventListener("change", (e) => {
            e.preventDefault();
let modifQuantity = changeList[i].value;
if (modifQuantity > 0 && modifQuantity<= 100) {
cart[i].quantity = modifQuantity;
saveSofa(cart)
window.location.reload();
}
window.location.reload();
getNumberProduct()
})
}
}
 





 
//Déclaration des éléments du questionnaire
const firstName = document.querySelector("#firstName");
firstName.addEventListener("change", function(){
validfirstName(this)
})

const lastName = document.querySelector("#lastName");
lastName.addEventListener("change", function(){
validlastName(this)
})


const address = document.querySelector("#address");
address.addEventListener("change", function(){
    validaddress(this)
    })



const city= document.querySelector("#city");
city.addEventListener("change", function(){
validcity(this)
    })

               
const email= document.querySelector("#email");
email.addEventListener("change", function(){
validEmail(this)})
        
  
//Fonctions RegExp pour la validation   


//Prénom
function validfirstName(inputfirstName){
    let firstNameRegExp = new RegExp(/^[a-z][a-z '-.,]{1,31}$|^$/i);
    let testfirstName = firstNameRegExp.test(inputfirstName.value) ;
    if(testfirstName){
        firstNameErrorMsg.innerHTML = "Valide";
        return true
    }else{
        firstNameErrorMsg.innerHTML = "Non valide";
        return false;
    }
}


//Nom
function validlastName(inputlastName){
    let lastNameRegExp = new RegExp(/^[a-z][a-z '-.,]{1,31}$|^$/i);
    let testlastName = lastNameRegExp.test(inputlastName.value) ;
    if(testlastName){
        lastNameErrorMsg.innerHTML = "Valide";
        return true
    }else{
        lastNameErrorMsg.innerHTML = "Non valide";
        return false;
    }
}


//Adresse
function validaddress(inputAddress){
    let addressRegExp = new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/);
    let testaddress = addressRegExp.test(inputAddress.value) ;
    if(testaddress){
        addressErrorMsg.innerHTML = "Valide";
        return true
    }else{
        addressErrorMsg.innerHTML = "Non valide";
        return false;
    }
}



//Ville
function validcity(inputcity){
    let cityRegExp = new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/);
    let testcity = cityRegExp.test(inputcity.value) ;
    if(testcity){
        cityErrorMsg.innerHTML = "Valide";
        return true
    }else{
        cityErrorMsg.innerHTML = "Non valide";
        return false;
    }
}
 


//Email
function validEmail(inputEmail){
let emailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);  // le + veut dire peut être écrit une fois ou plusieurs
let testEmail = emailRegExp.test(inputEmail.value) ;
if(testEmail){
    emailErrorMsg.innerHTML = "Adresse valide";
    return true
}else{
    emailErrorMsg.innerHTML = "Message d'erreur";
    return false;
    
}
}


//------------------------------------------------------------




/*

// Modifier la quantité
function changeQuantity(){
    const changeList = document.querySelectorAll(".itemQuantity");
    for(let i=0;i<changeList.length;i++) {
        changeList[i].addEventListener("change", (e) => {
            e.preventDefault();
let modifQuantity = changeList[i].value;
if (modifQuantity > 0 && modifQuantity<= 100) {
cart[i].quantity = modifQuantity;
saveSofa(cart)
window.location.reload();
}else if (modifQuantity <= 0){
    removeFromSofa
    window.location.reload();
}
getNumberProduct()
})
}
}


//Gestion du panier



//Modifier la quantité
function changeQuantity(product, quantity){
    let cart = getSofa();  
    let foundProduct = cart.find(p=>p.idProduct != product)
    if(foundProduct != undefined){ //gestion de la quantité
        foundProduct.quantity += quantity;
        if(foundProduct.quantity <= 0){
            removeFromSofa(foundProduct);
        }else{
            saveSofa(cart);
        }
    }
    }




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
});*/






















