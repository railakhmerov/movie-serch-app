const inputFilmNameNode = document.querySelector('.js-header__input')
const searchFilmBtnNode = document.querySelector('.js-header__btn')
const allFilmsNode = document.querySelector('.js-films');
let film = document.querySelector('.js-film');

const filmsList = [];

// События --------------------------------------------- //
searchFilmBtnNode.addEventListener('click', function() {
    let inputValue = inputFilmNameNode.value;

    fetch(`https://www.omdbapi.com/?s=${inputValue}&apikey=d69b78ae&`)
        .then(data => data.json())
        .then(json => {
            const fullFilmsArray = json.Search;
            console.log(fullFilmsArray);

            fullFilmsArray.forEach(element => { // Перебираем массив из объектов, внутри которых фильмы и сериалы
                allFilmsNode.innerHTML += `
                    <a href="#" class="film js-film">
                        <div class="film__image">
                            <img src="${element.Poster}" alt="film-image">
                        </div>
                        <div class="film__info">
                            <h2 class="film-name">${element.Title}</h2>
                            <h3 class="film-year">${element.Year}</h3>
                            <h4 class="film-or-serial">${element.Type}</h4>
                        </div>
                    </a>
                `;
            });
        })

    inputFilmNameNode.value = '';
});