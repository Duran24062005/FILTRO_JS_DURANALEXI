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
    }
    
    
    btnSearch.addEventListener('click', async() => {
        let ww = await fetchMovies('vida');
        // console.log(ww.description);
        // console.log(inputData.value);

    })
});