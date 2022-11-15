fetch('./db.json')
    .then(resp => resp.json())
    .then(data => renderingData(data))

const images= document.querySelector('#foodImages')

const renderingData= (data)=> {
    console.log(data)
    data.forEach(foods=> {
        const imageTag= document.createElement('img')
        imageTag.src=foods.image
        images.append(imageTag)
})}    

function handleFetch() {
 fetch("https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi")
 .then(res => res.json())
 .then(data => console.log(data))

}














// const ramensForRating= (ramens) => {
//     ramens.forEach(ramen => {
//         const imageTag= document.createElement('img')  
//         imageTag.src= ramen.image
//         ramensMenu.append(imageTag)