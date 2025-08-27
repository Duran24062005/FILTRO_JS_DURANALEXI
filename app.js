document.addEventListener('DOMContentLoaded', async () => {
    // console.log('Hola mundo');
    const btnSearch = document.getElementById('btn-search');
    const inputData = document.getElementById('inputSearch');
    
    async function fetchMovies(word) {
        try {
            const resp = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${word}`);
            let data = await resp.json();
            return data;
            
        } catch (error) {
            console.log(error);
        }

    }
    
    
    function renderMovies(movies) {
        const container = document.getElementById('main-container');
        console.log(movies.description);
        container.innerHTML = "";
        movies.description.forEach(m => {
            container.innerHTML += `<div class="card-container">
            <div class="head-img">
                <div class="img-container">
                    <img src="${m['#IMG_POSTER']}" alt="Image to${m['#TITLE']}" class="img">
                </div>
                <div class="info-container">
                    <h1>${m['#TITLE']}</h1>
                    <h2>Actors: ${m['#ACTORS']}</h2>
                    <p><strong>Fecha de creación:</strong> ${m['#YEAR']}</p>
                </div>
            </div>
        </div>
            `;
        });
    }
    
    
    btnSearch.addEventListener('click', async() => {
        // console.log(inputData.value);
        let data = inputData.value.toLowerCase().trim();
        /// console.log(data);
        if (data !== '') {
            let ww = await fetchMovies(data);
            //console.log(ww.description);
            renderMovies(ww);
        }

    })
});


