import api from './axios';

export function getMovieList({page = 1, search}){
  return api.get('', {
    params: {
      type: "movie",
      page,
      s: search ? search :  "Barbie",
      i: "tt3896198"
    }
  })
    .then((data) => data?.data)
    .catch(err => err)
}

export function getSeriesList({page = 1, search}){
  return api.get('', {
    params: {
      type: "series",
      page,
      s: search ? search :"Mickey",
      i: "tt3896198"

    }
  })
    .then((data) => data?.data)
    .catch(err => err)
}

export function getEpisodeList({page = 1, search}){
  return api.get('', {
    params: {
      type: "episode",
      page,
      s: search ? search : "Dora",
      i: "tt3896198"
    }
  })
    .then((data) => data?.data)
    .catch(err => err)
}

export function getById(id) {
  return api.get('', {
    params: {
      i: id,
      plot: "full"
    }
  })
  .then((data) => data?.data)
  .catch(err => err)
}

export function getByName(name) {
  return api.get("", {
    params: {
      i: "tt3896198",
      t: name,
      page: 1
    }
  })
}