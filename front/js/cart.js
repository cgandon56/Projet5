//Création du panier



// Déclaration et affichage du panier
function showProducts(product){
    const section = (document.querySelector("#cart__items"));
    console.log(section);  
}
showProducts()

function getSofa(){
    let sofa = localStorage.getItem("sofa");
    if(sofa == null){
        return [];
    }else{
       return JSON.parse(sofa);
    }
}







/*//Gestion du panier

//Ajouter, sauver et récupérer le panier
function saveSofa(sofa){ //sauver le panier 
    localStorage.setItem("sofa", JSON.stringify(sofa));//stringify=prend en objet et le transforme en chaine de caractères pour l'enregistrer
}

function getSofa(){
    let sofa = localStorage.getItem("sofa");
    if(sofa == null){
        return [];
    }else{
       return JSON.parse(sofa);
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


/ récupération du panier en objet mode orienté object
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
















