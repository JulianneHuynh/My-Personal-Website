function handleFetch() {
 fetch("https://apilist.fun/api/food-api")
 .then(res => res.json())
 .then(data => console.log(data))
}

handleFetch();