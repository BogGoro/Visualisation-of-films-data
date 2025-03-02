let filmsData = [];

// Fetch JSON Data
fetch('films.json')
    .then(response => response.json())
    .then(data => {
        filmsData = data;
        displayFilms(filmsData);
    })
    .catch(error => console.error("Error loading data:", error));

// Display Films in Table
function displayFilms(films) {
    const tbody = document.querySelector("#filmsTable tbody");
    tbody.innerHTML = "";
    films.forEach(film => {
        let row = `<tr>
            <td>${film.title}</td>
            <td>${film.release_year}</td>
            <td>${film.director}</td>
            <td>$${film.box_office.toLocaleString()}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// Filter Films by Title
function filterFilms() {
    let query = document.getElementById("search").value.toLowerCase();
    let filtered = filmsData.filter(film => film.title.toLowerCase().includes(query));
    displayFilms(filtered);
}

// Sort Films
function sortFilms() {
    let key = document.getElementById("sort").value;
    filmsData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    displayFilms(filmsData);
}
