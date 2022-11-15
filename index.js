fetch('./db.json')
    .then(resp => resp.json())

    .then(foodArray => renderFoods(foodArray));

const countryName = document.querySelector("countrys-name")
const foodName = document.querySelector("food-name")
const foodImage

function renderFoods(foods){
  foods.forEach((food)=> {
  const span = document.createElement("span");
    span.src = 
    // how can i add flag images as a span without images in dbjson file.
    span.addEventListener("click",()=> {
      countryName.textContent = food.country;
      foodName.textContent = food.name;
      foodImage.src = food.image;
      
    });
    flagBar.append(span);
  });
   









// const images= document.querySelector('#foodImages')
// const renderingData= (data)=> {
//     console.log(data)
//     data.foods.forEach(foods=> {
//         const imageTag= document.createElement('img')
//         imageTag.src=foods.image
//         images.append(imageTag)
//     })
