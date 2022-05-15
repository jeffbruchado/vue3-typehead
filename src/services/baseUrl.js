const baseUrl = 'https://api.themoviedb.org/3/search'
const apiKey = `?api_key=${import.meta.env.VITE_API_KEY}`

const base = {
  movies: {
    getMoviesByTitle: `${baseUrl}/movie${apiKey}&query=`,
  }
}

export default base;