let cart = getSofa(); 

// fonction récupérer le panier
function getSofa(){
    let cart = localStorage.getItem("cart");   
        if(cart == null){
            let h1 = document.querySelector("h1");
            h1.innerText = "Votre panier est vide";
        } else {
        return JSON.parse(cart);
        }
}


//Fonction récupération de l'adresse pour avoir les données des articles
function getDetailsSofa(idProduct){
    return  fetch(`http://localhost:3000/api/products/${idProduct}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
                    return data;
        })
        .catch(error => console.warn(error));

}

// Fonction affichage des détails des articles du panier 
function listCart(){
    let cart = this.getSofa(); 
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
            removeFromSofa(cart,j);
            saveSofa(cart);
        }
    }
         getNumberProduct();// calcul nombre d'articles
         changeQuantity();// Modification quantité
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
    
  
// Fonction modifier la quantité
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
        getNumberProduct()
        })
        }
}
 

 
//Déclaration des éléments du questionnaire et vérification que le questionnaire est bien rempli

const firstName = document.querySelector("#firstName");
    firstName.addEventListener("change", function(){
    validfirstName(this)
    });

const lastName = document.querySelector("#lastName");
    lastName.addEventListener("change", function(){
    validlastName(this)
    });


const address = document.querySelector("#address");
    address.addEventListener("change", function(){
    validaddress(this)
    });



const city= document.querySelector("#city");
    city.addEventListener("change", function(){
    validcity(this)
    });

               
const email= document.querySelector("#email");
    email.addEventListener("change", function(){
    validEmail(this)
    });


        

//Fonctions RegExp pour la validation   


//Vérification Prénom
function validfirstName(inputfirstName){
    let firstNameRegExp = new RegExp("^[A-Za-zéèêëàâîïôöûü-]+$");
    let testfirstName = firstNameRegExp.test(inputfirstName.value) ;
    if(testfirstName){
       // firstNameErrorMsg.innerHTML = "Prénom Valide";
        return true;
    }else{
        firstNameErrorMsg.innerHTML = "Non valide";
        return false;
    }
}


//Vérification du Nom
function validlastName(inputlastName){
    let lastNameRegExp = new RegExp("^[A-Za-zéèêëàâîïôöûü-]+$");
    let testlastName = lastNameRegExp.test(inputlastName.value) ;
    if(testlastName){
        return true
    }else{
        lastNameErrorMsg.innerHTML = "Non valide";
        return false;
    }
}


//Vérification Adresse
function validaddress(inputAddress){
    let addressRegExp = new RegExp(/^[a-zA-Z0-9\u00C0-\u00FF\s,. '-]{3,}$/);
    let testaddress = addressRegExp.test(inputAddress.value) ;
    if(testaddress){
        return true
    }else{
        addressErrorMsg.innerHTML = "Non valide";
        return false;
    }
}



//Vérification Ville
function validcity(inputcity){
    let cityRegExp = new RegExp("^[A-Za-zéèêëàâîïôöûü-]+$");
    let testcity = cityRegExp.test(inputcity.value) ;
    if(testcity){
        return true
    }else{
        cityErrorMsg.innerHTML = "Non valide";
        return false;
    }
}
 


//Vérification Email
function validEmail(inputEmail){
let emailRegExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);  // le + veut dire peut être écrit une fois ou plusieurs
let testEmail = emailRegExp.test(inputEmail.value) ;
if(testEmail){
     return true
}else{
    emailErrorMsg.innerHTML = "Email non valide";
    return false;
    
}
}

//Envoi du formulaire
document.querySelector("#order").addEventListener("click",(e) => { 
    e.preventDefault();

if(
    validfirstName(firstName)&&
    validlastName(lastName)&&
    validaddress(address)&&
    validcity(city)&&
    validEmail(email)) {
SendRequest();} //envoyer la requete si le questionnaire est validé
else{
    console.error("Tous les champs ne sont pas correctement remplis") 
}
});



//Fonction envoyer la requete
function SendRequest(){
    let contact= { 
        firstName: document.querySelector("#firstName").value,
        lastName :document.querySelector("#lastName").value,
        address: document.querySelector("#address").value,
        city:document.querySelector("#city").value,
        email:document.querySelector("#email").value, 
    };console.log(contact)
    let products = [];
        for (i=0; i<cart.length;i++){
            products.push(cart[i].idProduct)} ;console.log(products)
    let objectForm = {// création de l'objet à envoyer
                contact,
                products,
    }
    fetch(`http://localhost:3000/api/products/order`, {
        method: 'POST',
        body: JSON.stringify(objectForm),// corps de la requete
        headers: {// entete de la requete pour préciser le type de données
         'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then((response) => response.json())
        .then((data) => { 
            localStorage.setItem("objectForm", JSON.stringify(objectForm));
            document.location.href = `confirmation.html?idProducts=${data.orderId}`;
  })
        .catch(error => console.warn(error));
}








    
























