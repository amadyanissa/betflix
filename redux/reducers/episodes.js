const defaultState = {
    episodes: [],
  };
  
export default function episodes(state = defaultState, action) {
  switch (action.type) {
    case 'SET_MORE_EPISODES': 
      return {
        episodes: [...state.episodes, ...action.episodes]
      }
    case 'SET_DEFAULT_EPISODES':
      return {
        episodes: action.episodes
      }
    default:
      return state;
  }
}