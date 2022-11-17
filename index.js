fetch('http://localhost:3000/foods')
    .then(resp => resp.json())
    .then(foodArray => {
      renderFoods(foodArray);
      reRandomize(foodArray);
      renderFlags(foodArray)
})

const foodDetails = document.querySelector("#food-detail")
const randomizer = document.querySelector('#Randomizer')
const emptyCountry= document.querySelector('#country')
const emptyName= document.querySelector('#food-name')
const emptyImage= document.querySelector('#image')
const emptyRating= document.querySelector('#rating')

function renderFlags(flags) {
  flags.forEach((flag) =>{
    const imageFlag = document.createElement("img")
    imageFlag.src = flag.flag_image;
        imageFlag.height= 100;
        imageFlag.width= 150;
    const flagBar= document.querySelector("#flag-bar")
    imageFlag.addEventListener("click",()=>{
      emptyCountry.textContent= flag.country;
      emptyName.textContent= flag.name;
      emptyImage.src= flag.image;
        emptyImage.height= 300;
        emptyImage.width= 400;
     
    });
    flagBar.append(imageFlag);
  })
}

const renderFoods= (foodArray => {
      randomizer.addEventListener('click', (e) => {
        const randomFood = foodArray[Math.floor(Math.random() * foodArray.length)]
        emptyCountry.textContent= randomFood.country
        emptyName.textContent= randomFood.name
        emptyImage.src= randomFood.image
          emptyImage.height= 300
          emptyImage.width= 400
        emptyRating.textContent= randomFood.rating
})})

const reRandomize= (foodArray => {
    randomizer.addEventListener('keydown', (event) => {
      const randomFood = foodArray[Math.floor(Math.random() * foodArray.length)]
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
  keyUp() ? alert('Enjoy your flavor adventure') : console.log('')
  keyDown() ? reRandomize() : console.log('')
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



