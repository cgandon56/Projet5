// Récupération du numéro de commande
function confirmation(){
    const order = (document.querySelector("#orderId"));
    console.log(order);
    order.innerHTML= localStorage.getItem("orderIdProduct");
    localStorage.clear();
    
}
confirmation()