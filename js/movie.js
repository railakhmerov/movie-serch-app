fetch('https://www.omdbapi.com/?apikey=d69b78ae&')
    .then(data => console.log(data.json()))