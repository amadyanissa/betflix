const defaultState = {
    series: [],
  };
  
export default function series(state = defaultState, action) {
  switch (action.type) {
    case 'SET_SERIES':
      return {
        ...state,
        series: action.series
      }
    case 'SET_MORE_SERIES': 
      return {
        series: [...state.series, ...action.series]
      }
    case 'SET_DEFAULT_SERIES':
      return {
        series: action.series
      }

    default:
      return state;
  }
}