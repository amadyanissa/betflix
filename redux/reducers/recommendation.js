const defaultState = {
  searchGlobal: "",
  showRecommendations: false
};

export default function recommendation(state = defaultState, action) {
switch (action.type) {
  case "SET_SEARCH":
    return {
      searchGlobal: action.search
    }
  case "SHOW_RECOMMENDATION": 
    return {
      showRecommendations: action.showRecommendations
    }
  default:
    return state;
  }
}