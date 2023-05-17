const dataBookFetch = async (category, page) => {
    try {
        const bookCategoryFetch = await fetch(
            `http://127.0.0.1:8000/libro/?categoria=${category}&page=${page}`
        );
        const res = await bookCategoryFetch.json();
        const books = res.results;
        return books;
    } catch (error) {
        console.error('Error de conexión');
    }
};

export default dataBookFetch;
