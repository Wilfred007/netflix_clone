const key = 'd4cf6d971c9678c29c48c90e745c1e1c'


const requests = {
    requestPopular: `https://themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests