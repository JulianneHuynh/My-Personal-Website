fetch('http://localhost:3000/foods')
    .then(resp => resp.json())

    .then(foodArray => renderFoods(foodArray));


const countryName = document.querySelector("#countrys-name")
const foodName = document.querySelector("#food-name")
const flagBar= document.querySelector("#flag-bar")
const resetBtn= document.querySelector("#reset-btn")
const foodImage= document.querySelector("#image")

function renderFoods(foods){
  foods.forEach((food)=> {
// do we want the event on the flags or the button? or both?
    resetBtn.addEventListener("click",()=> {
      countryName.textContent = food.country;
      foodName.textContent = food.name;
      // insert randomizer
      
      ;
      
    });
    flagBar.append(resetBtn);
  })}
   



// how can i add flag images as a span without images in dbjson file. // added photos through index.html. refer to photos by class name






// const images= document.querySelector('#foodImages')
// const renderingData= (data)=> {
//     console.log(data)
//     data.foods.forEach(foods=> {
//         const imageTag= document.createElement('img')
//         imageTag.src=foods.image
//         images.append(imageTag)
//     })
