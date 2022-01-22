class MoviesAPI {
  API_KEY = "b1639bc238fe064bd156f40ec51dc9a7";
  BASE_URL = "https://api.themoviedb.org/3/";

  #page = 1;

  getTrendingMovies() {
    const response = fetch(
      `${this.BASE_URL}trending/all/day?api_key=${this.API_KEY}`
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error("Произошла ошибка :("));
    });

    return response;
  }

  searchMovies(query) {
    this.query = query;
    const response = fetch(
      `${this.BASE_URL}search/movie?api_key=${
        this.API_KEY
      }&language=en-US&query=${query}&page=${this.#page}&include_adult=false`
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error("Произошла ошибка :("));
    });
    return response;
  }

  getMovieDetailsById(movieId) {
    const response = fetch(
      `${this.BASE_URL}movie/${movieId}?api_key=${this.API_KEY}&language=en-US`
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error("Произошла ошибка :("));
    });
    return response;
  }

  getMovieCast(movieId) {
    const response = fetch(
      `${this.BASE_URL}movie/${movieId}/credits?api_key=${this.API_KEY}&language=en-US`
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error("Произошла ошибка :("));
    });
    return response;
  }

  getMovieReviews(movieId) {
    const response = fetch(
      `${this.BASE_URL}movie/${movieId}/reviews?api_key=${this.API_KEY}&language=en-US&page=1`
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error("Произошла ошибка :("));
    });
    return response;
  }

  nextPage = () => {
    return (this.#page += 1);
  };

  resetPage = () => {
    return (this.#page = 1);
  };
}

export default new MoviesAPI();
