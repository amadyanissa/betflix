const defaultState = {
    homeMovies: [],
    homeSeries: [],
    homeEpisodes: []
  };
  
export default function homeList(state = defaultState, action) {
  switch (action.type) {
    case 'SET_HOME_MOVIE':
      return {
        ...state,
        homeMovies: action.movies
      }
    case 'SET_HOME_SERIES':
      return {
        ...state,
        homeSeries: action.series
      }
    case 'SET_HOME_EPISODES':
      return {
        ...state,
        homeEpisodes: action.episodes
      }
    default:
      return state;
  }
}