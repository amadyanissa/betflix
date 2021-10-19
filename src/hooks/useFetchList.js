import { useState } from "react"
import api from "../../pages/api/axios"
import {  useDispatch } from "react-redux";

export function useFetchList() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();

  const fetchMovies = (page = 1, query) => {
    setLoading(true)
    api.get("", {
      params: {
        type: "movie",
        page,
        s: query ? query : "Barbie"
      }
    })
    .then(({data}) => {
      dispatch({
        type: "SET_MORE_MOVIE",
        movies: data?.Search
      })
    })
    .catch(err => err)
    .finally(() => setLoading(false))
  }

  const fetchSeries = (page = 1, query) => {
    setLoading(true)
    api.get("", {
      params: {
        type: "series",
        page,
        s: query? query : "Mickey"
      }
    })
    .then(({data}) => {
      dispatch({
        type: "SET_MORE_SERIES",
        series: data?.Search
      })
    })
    .catch(err => err)
    .finally(() => setLoading(false))
  }

  const fetchEpisode= (page = 1, query) => {
    setLoading(true)
    api.get("", {
      params: {
        type: "episode",
        page,
        s: query ? query : "love"
      }
    })
    .then(({data}) => {
      dispatch({
        type: "SET_MORE_EPISODES",
        episodes: data?.Search
      })
    })
    .catch(err => err)
    .finally(() => setLoading(false))
  }

  return {
    fetchMovies,
    fetchSeries,
    fetchEpisode,
    loading,
  }
}