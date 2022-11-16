fetch('http://localhost:3000/foods')
    .then(resp => resp.json())
    .then(foodArray => {
      renderFoods(foodArray)
      renderOneFood(foodArray[0])
    });

const flagBar= document.querySelector("#flag-bar")
const foodDetails = document.querySelector("#food-detail")
const randomizer = document.querySelector('#Randomizer')
const emptyCountry= document.querySelector('#country')
const emptyName= document.querySelector('#food-name')
const emptyImage= document.querySelector('#image')
const emptyRating= document.querySelector('#rating')

const renderFoods= (foodArray => {
    foodArray.forEach(food => {
        // each return creates an element
        let foodCountry= document.createElement('h2')
        let foodName= document.createElement('h3')
        let foodImage= document.createElement('img')
            foodImage.height= 400
            foodImage.width= 500
        let foodRating= document.createElement('h4')
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
        })
      randomizer.addEventListener('click', (e) => {
        const randomFood = foodArray[Math.floor(Math.random() * foodArray.length)]
        console.log(randomFood) 
      })
})
          