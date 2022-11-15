//Attempts 1,, doesnt  work
// const data= require('./db.json')
// console.log(data)
// function getData() {
//     var json_data = require('./db.json');
//     for (var i in json_data){
//     console.log('Name: ' + json_data[i]["name"])
// }}
// getData()

//Attempt 2,, doesn't work
// fetch('./db.json')
//     .then(resp => resp.json())
//     .then(data => testingTest(data))
// function testingTest(data) {
//     console.log(data)
// }


//Attempt 3,, many errors but array recieved :::: https://www.youtube.com/watch?v=Z92PqSyUBSI
// const theData=document.getElementById('theData')
// import foods from "./db.json" assert {type:'json'}
//     console.log(foods)
// const foodsForDisplay= (foods)=> {
//     foods.forEach(food => {
//         console.log(food) //Cannot read properties of undefined
//         const imageTag= document.createElement('img')
//         imageTag.src=food.imageTag
//         theData.append(imageTag)
//})}
// foodsForDisplay()




///used links to fgure out how to link db.json without fetch
// https://stackoverflow.com/questions/40574159/refused-to-execute-script-strict-mime-type-checking-is-enabled
// https://stackoverflow.com/questions/49481934/fetching-local-json
// https://flaviocopes.com/fix-cannot-use-import-outside-module/
