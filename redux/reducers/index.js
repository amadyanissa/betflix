import { combineReducers } from 'redux';
import movies from './movies'
import homeList from "./home-list"
import series from "./series"
import episodes from "./episodes"
export default combineReducers({
  movies,
  series,
  episodes,
  homeList
})