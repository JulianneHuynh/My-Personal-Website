fetch('http://localhost:3000/foods')
    .then(resp => resp.json())
    .then(foodArray => {
      renderFoods(foodArray)
    });
const flagBar= document.querySelector("#flag-bar")
const foodDetails = document.querySelector("#food-detail")
const randomizer = document.querySelector('#Randomizer')
const emptyCountry= document.querySelector('#country')
const emptyName= document.querySelector('#food-name')
const emptyImage= document.querySelector('#image')
const emptyRating= document.querySelector('#rating')


const renderFoods= (foodArray => {
      randomizer.addEventListener('click', (e) => {
        var randomFood = foodArray[Math.floor(Math.random() * foodArray.length)]
        emptyCountry.textContent= randomFood.country
        emptyName.textContent= randomFood.name
        emptyImage.src= randomFood.image
          emptyImage.height= 500
          emptyImage.width= 600
        emptyRating.textContent= randomFood.rating
})})

document.addEventListener('keydown', (event) =>{
  const keyUp= () =>{
    switch (event.key){
    case 'ArrowUp': return true}}
  const keyDown= () => {
    switch (event.key) {
    case 'ArrowDown': return true}}
  
  keyUp();
  keyDown();

  keyUp() ? alert('Enjoy your adventure') : console.log('')
  // keyDown nwwda it's true statement to recreate renderFoods
  // keyDown() ? xxxxxxxxxxxxxxx : console.log('')
})

function addRatingForm() {
  const addRatingForm = document.querySelector("#rating-form");
  addRatingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const ratingInput = event.target["rating"].value;
    const ratingAmount = document.querySelector("#rating-count");
    ratingAmount.textContent =
      parseInt(ratingAmount.textContent) + parseInt(ratingInput);
  });
}
addRatingForm();



// document.addEventListener('keydown', (event) => console.log(event))

// key: 'ArrowUp', code: 'ArrowUp',
// key: 'ArrowDown', code: 'ArrowDown',

// document.addEventListener('keydown', (event) => {
//   if (event.code === 'ArrowDown'){
//     console.log('Key down pressed')  
//   if (event.code === 'ArrowUp'){
//     console.log('Key up pressed')  
// }}})