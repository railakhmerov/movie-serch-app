const inputFilmNameNode = document.querySelector('.js-main__input')
const searchFilmBtnNode = document.querySelector('.js-main__search-film-btn')
const allFilmsNode = document.querySelector('.js-films');

const filmsList = [];

// События --------------------------------------------- //
searchFilmBtnNode.addEventListener('click', function() {
    const inputValue = inputFilmNameNode.value;

    if (inputValue === undefined || inputValue === '') { // Если user ничего не введет
        return;
    };

    fetch(`https://www.omdbapi.com/?s=${inputValue}&apikey=d69b78ae&`)
        .then(data => data.json())
        .then(json => {
            const fullFilmsArray = json.Search;
            console.log(fullFilmsArray);
            
            arraySearch(fullFilmsArray);
        })

    clearInput(inputFilmNameNode); // очищаем input
    clearPastList(allFilmsNode); // Очищаем прошлый список
});



// Функции ----------------------------------------- //
function arraySearch(fullFilmsArray) { // Перебираем массив из объектов, внутри которых фильмы и сериалы
    fullFilmsArray.forEach(element => {
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
};

function clearInput(inputFilmNameNode) { // очищаем input
    inputFilmNameNode.value = '';
};

function clearPastList(allFilmsNode) {
    allFilmsNode.innerHTML = '';
};