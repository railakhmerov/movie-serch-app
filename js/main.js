const inputFilmNameNode = document.querySelector('.js-header__input')
const searchFilmBtnNode = document.querySelector('.js-header__btn')
const allFilms = document.querySelector('.js-films');
let film = document.querySelector('.js-film');

const filmsList = [];
const inputValue = inputFilmNameNode.value;

// События --------------------------------------------- //
searchFilmBtnNode.addEventListener('click', function() {
    const inputValue = inputFilmNameNode.value;

    // console.log("message");
    fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=d69b78ae&`)
        .then(data => data.json())
        .then(json => {
            console.log(json);
            const filmImageSrc = json.Poster;
            const filmTitle = json.Title;
            const filmYear = json.Year;
            const filmType = json.Type;

            allFilms.innerHTML += `
            <a href="#" class="film js-film">
                <div class="film__image">
                    <img src="${filmImageSrc}" alt="film-image">
                </div>
                <div class="film__info">
                    <h2 class="film-name">${filmTitle}</h2>
                    <h3 class="film-year">${filmYear}</h3>
                    <h4 class="film-or-serial">${filmType}</h4>
                </div>
            </a>
            `;
        })
});

// fetch(`http://www.omdbapi.com/?s=${inputValue}&apikey=d69b78ae&`)
//     .then(response => response.json())
//     .then(json => console.log(json))