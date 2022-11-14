function handleFetch() {
 fetch("https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi")
 .then(res => res.json())
 .then(data => console.log(data))
}

handleFetch();