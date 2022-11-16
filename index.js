fetch('http://localhost:3000/foods')
    .then(resp => resp.json())
    .then(foodArray => renderFoods(foodArray));


const flagBar= document.querySelector("#flag-bar")
const foodDetails = document.querySelector("#food-detail")
const randomizer = document.querySelector('#Randomizer')


const renderFoods= (foodArray) => {
    console.log(foodArray)
    /* there is a forEach error but the fact that the data is still in #food-detail
    tells us that it still went through each of the foodArray objects */
    foodArray.forEach(foods => {
        // each return creates an element
        /*I cant think of a way to make this global but it might help with the
        random() problem <lines 41&42> */
        let foodCountry= document.createElement('h2')
        let foodName= document.createElement('h3')
        let foodImage= document.createElement('img')
            foodImage.height= 400
            foodImage.width= 500
        let foodRating= document.createElement('rating')
        // each element gets the .json data attached
        foodCountry.append(foods.country)
        foodName.append(foods.name)
        foodImage.src= foods.image
        foodRating.append(foods.rating)
        // each element is attached to the food-detail tag
        foodDetails.append(foodCountry)
        foodDetails.append(foodName)
        foodDetails.append(foodImage)
        foodDetails.append(foodRating)
  ///// adding random() event listener?
})}
renderFoods()

    
//Randomizer function 
/*do you know how to call the renderFoods() in random()? i think thats the answer
if the button is under the 'forEach' function it runs an error for every return */
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