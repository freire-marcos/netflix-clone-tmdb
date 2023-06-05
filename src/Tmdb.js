const API_KEY = '58b0c304337f7f523146bfdb458d1204';
const API_BASE = 'http://api.themoviedb.org/3';

const basicFatch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = req.json();
    return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: await basicFatch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFatch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'top rated',
                title: 'Em alta',
                items: await basicFatch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'action',
                title: 'Filmes de ação',
                items: await basicFatch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'comedy',
                title: 'Melhores comédias',
                items: await basicFatch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'horror',
                title: 'Filmes de medo',
                items: await basicFatch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'romance',
                title: 'Filmes de romance',
                items: await basicFatch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFatch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`),
            },

        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            // eslint-disable-next-line default-case
            switch(type) {
                case 'movie':
                    info = await basicFatch(`/movie/${movieId}?language=pt_BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFatch(`/tv/${movieId}?language=pt_BR&api_key=${API_KEY}`);
                break
            }
        }
        return info;
    }
}