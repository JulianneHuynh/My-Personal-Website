fetch('http://localhost:3000/foods')
    .then(resp => resp.json())
    .then(foodArray => renderFoods(foodArray));


const countryName = document.querySelector("#countrys-name")
const foodName = document.querySelector("#food-name")
const flagBar= document.querySelector("#flag-bar")
const randomBtn= document.querySelector("#random-btn")
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
   


//Randomizer function 
  let randomizer = document.querySelector(//randomizer pic'); 
  )
  let result = document.querySelector('h1');

  let flags = document.querySelector("flag-bar");
  console.log(flags)
// how to get flag img vs text 

  function getRandomNumber(min,max) {
    let step1 = max - min + 1; 
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return  result;
  }
btnRandomizer.addEventListener('click',() => {
  let index = getRandomNumber(0,flags.length-1);
  result.textContent = flags[index]
});

