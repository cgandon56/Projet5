// Récupération du numéro de commande
let id = (new URL(window.location).searchParams.get("id"));

    
    let commande = (document.querySelector("#orderId"));
       commande.innerHTML= localStorage.getItem("orderId");
    localStorage.clear();
    





