import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getByName, getMovieList } from "../../../pages/api/endpoints";
import RecomendationPane from "./recommendation-pane";
import style from "./search-input.module.sass"
export default function SearchInput() {
  const [search, setSearch ] = useState("")
  const [recommendationMovies, setRecommendationMovies] = useState([])
  const router = useRouter()
  const onSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: {s: search}
    } )
        
  }

  const getRecomendation = async () => {
    const data = await getMovieList({search})
    setRecommendationMovies(data?.Search)
  }

  useEffect(() => {
    if(search != "") getRecomendation();
  },[search])
  return(
    <div className={style['search-dropdown']}>
      <div className={style['search-container']}>
        <form onBlur={() => setRecommendationMovies([])} onSubmit={onSubmit}>
          <input placeholder="Title" value={search} onChange={(e) => setSearch(e.target.value)} />

          <button type="submit">Search</button>
        </form>
      </div>
      {
        recommendationMovies?.length > 0 && 
          <div className={style["dropdown-content"]}>
          <div className={style["group"]}>
            {
              recommendationMovies?.map((item) => {
                return <RecomendationPane title={item?.Title} poster={item?.Poster} year={item?.Year} id={item?.imdbID} key={item?.imdbID} />
              })
            }
          </div>
          </div>
        }
        </div>
  )
}