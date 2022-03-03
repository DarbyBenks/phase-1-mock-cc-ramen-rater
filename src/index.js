const menuContainer = document.getElementById('ramen-menu')
const ramenForm = document.getElementById('new-ramen')

ramenForm.addEventListener("submit", function (e) {
     e.preventDefault();

    const name = document.querySelector('#new-name');
    const resturant = document.querySelector('#new-restaurant');
    const image = document.querySelector('#new-image');
    const rating = document.querySelector('#new-rating');
    const comment = document.querySelector('#new-comment');

let newRamenType = {
    id: 6,
    name: name,
    restaurant: resturant,
    image: image,
    rating: 0,
    comment: comment
  };

  renderRamen(newRamenType);
  ramenForm.reset();

});


function getRamen(){
    fetch('http://localhost:3000')
    .then(function(responce){
        return responce.json()
    })
    .then(function(differentRamen){
        differentRamen.forEach(function(singleRamen){
            renderRamen(differentRamen)
        })
    })
}




function renderRamen(preSetRamen) {
    const ramenItem = document.createElement("div");

    ramenItem.id = `ramen-${preSetRamen.id}`;
    ramenItem.className = "ramen-menu-item"

    ramenItem.addEventListener('click', function(){
        return presentRamen(preSetRamen)
    })

    const ramenImg = document.createElement("img");
        ramenImg.src = preSetRamen.img;
        ramenImg.alt = `${preSetRamen.name} image`;

    const ramenName = document.createElement('h3');
        ramenName.textContent = preSetRamen.name;

    const resturantName = document.createElement('h4');
        resturantName.textContent = preSetRamen.name;

    const ramenRating = document.createElement('h4');
        ramenRating.className = "ramen-rating";
        ramenRating.textContent = preSetRamen.rating;

    const ramenComment = document.createElement('h4');
        ramenComment.textContent = preSetRamen.comment

    ramenItem.append(ramenImg, ramenName, resturantName, ramenRating, ramenComment)
    menuContainer.appendChild(ramenItem)
    console.log(menuContainer)

    return ramenItem
}






function presentRamen(specificRamen){

    fetch(`http://localhost:3000/ramens/${specificRamen.id}`)
    .then(function(response){
      return response.json()
    }) 
    .then(function(ramen){
      const ramenItem = renderPokemon(ramen) 
      ramenItem.id = "show-ramen-item" 
      pokeContainer.replaceChildren(pokeCard)
    })
  
  }


