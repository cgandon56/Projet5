// Récupération du numéro de commande
const params = new URL(document.location).searchParams;
    let orderId = params.get("idProducts");

let commande = document.getElementById("orderId");
commande.innerHTML = orderId;
localStorage.clear();




