import baseUrl from '../../baseUrl';
import api from '../../axios'

export default {
  getMoviesByTitle(query) {
    return api.get(`${baseUrl.movies.getMoviesByTitle}${query}`)
  }
}