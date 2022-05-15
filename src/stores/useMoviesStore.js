import { defineStore } from "pinia";
import api from '../services/api/movies';

export const useMoviesStore = defineStore('moviesStore', {
  state: () => ({
    moviesCache: {},
    selectedMovies: [],
    loadingSuggestionsList: false,
  }),
  actions: {
    getMoviesByTitle(query) {
      if (this.moviesCache[query]) return this.moviesCache[query];

      this.loadingSuggestionsList = true;
      return api.getMoviesByTitle(query)
        .then((response) => {
          this.moviesCache[query] = response.data.results;
          return response.data.results
        })
        .catch((error) => console.log(error))
        .finally(() => this.loadingSuggestionsList = false);
    },
    setSelectedMovies(movie) {
      if (this.selectedMovies.includes(movie)) {
        this.selectedMovies = this.selectedMovies.filter(m => m !== movie);
      } else {
        this.selectedMovies.push(movie);
      }
    }
  },
})