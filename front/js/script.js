async function products() { 
  fetch("http://localhost:3000/api/products")//adresse URL à aller chercher
    .then(response => response.json())// réponse du résultat en json
    .then((data)=> {
    console.log(data) ;


//Sélection de la section items
const section = (document.querySelector("#items"));
console.log(section); 

//Affichage des produits sur la page d'acceuil
    for (i = 0; i < data.length; i++) {  // Utilisation de la boucle for
        const article = `
          <a href="./product.html?id=${data[i]._id}">
            <article>
              <img
                src="${data[i].imageUrl}"
                alt="${data[i].altTxt}"
              />
              <h3 class="productName">${data[i].name}</h3>
              <p class="productDescription">
                ${data[i].description}
              </p>
            </article>
          </a>
        `;
        section.innerHTML += article; //récupération du contenu html et intégration
      }
    })
    .catch(error => console.warn("les produits ne s'affichent par correctement"));
};
products();

