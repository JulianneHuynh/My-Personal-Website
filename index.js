fetch('http://localhost:3000/foods')
    .then(resp => resp.json())
    .then(foodArray => renderFoods(foodArray));


const flagBar= document.querySelector("#flag-bar")
const foodDetails = document.querySelector("#food-detail")
const randomizer = document.querySelector('#Randomizer')


const renderFoods= ((foodArray) => {
  ///// adding random() event listener?
    foodArray.forEach(food => {
        // each return creates an element
        let foodCountry= document.createElement('h2')
        let foodName= document.createElement('h3')
        let foodImage= document.createElement('img')
            foodImage.height= 400
            foodImage.width= 500
        let foodRating= document.createElement('rating')
        // each element gets the .json data attached
        foodCountry.append(food.country)
        foodName.append(food.name)
        foodImage.src= food.image
        foodRating.append(food.rating)
        
        // each element is attached to the food-detail tag
        foodDetails.append(foodCountry)
        foodDetails.append(foodName)
        foodDetails.append(foodImage)
        foodDetails.append(foodRating)
        console.log(foodCountry, foodName, foodImage, foodRating)
    
  
})})
renderFoods()

function random(){
  randomizer.addEventListener("click",(e)=> {
        foodCountry.textContent = food.country;
        foodName.textContent = food.name;
        
})}
random()

/* I havn't really looked beyond this point */

flagBar.append(randomizer);
  let result = document.querySelector('h1');
  let flags = document.querySelector("#flag-bar");
  
// how to get flag img vs text 
  function getRandomNumber(min,max) {
    let step1 = max - min + 1; 
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return  result;
}
randomizer.addEventListener('click',() => {
  let index = getRandomNumber(0,flags.length-1);
  result.textContent = flags[index]
});
