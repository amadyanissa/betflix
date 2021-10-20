import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../../../pages/api/endpoints";
import RecomendationPane from "./recommendation-pane";
import style from "./search-input.module.sass"


export default function SearchInput() {
  const [search, setSearch ] = useState("")
  const [recommendationMovies, setRecommendationMovies] = useState([])
  const router = useRouter()
  const dispatch = useDispatch()
  const query = router.query.s 
  const { showRecommendations, searchGlobal} = useSelector(({ recommendation }) => recommendation);
  const [show, setShow] = useState(false)
  console.log(show)
  const onSubmit = (e) => {
    e.preventDefault();
    router.replace({
      pathname: "/movies",
      query: {s: search}
    } )
  }
  const getRecomendation = async (title) => {
    const data = await getMovieList({search: title? title: search})
    setRecommendationMovies(data?.Search)
    if(show) {
      dispatch({
        type: "SHOW_RECOMMENDATION",
        showRecommendations: true
      })
    }
  }

  useEffect(() => {
    if(search != "") getRecomendation(search);
    else hide()
  },[search])

  const onBlur = () => {
    if(search === "") hide()
  }

  useEffect(() => {
    hide()
    setShow(false)
  },[query])

  const onClick = async(title) => {
   await dispatch({
      type: "SET_SEARCH",
      search: title
    })
    await setSearch(title)
    hide()

  }

  const hide = () => {
    dispatch({
      type: "SHOW_RECOMMENDATION",
      showRecommendations: false
    })
  }

  return(
    <div>
    <div className={style['search-dropdown']}>
      <div className={style['search-container']}>
        <form onSubmit={onSubmit}>
          <input
          onBlur = {() => onBlur()}
          onFocus={() => {
            getRecomendation(searchGlobal)
            setShow(true)
          }} placeholder="Search by Movie Title" value={search ? search : searchGlobal} onChange={(e) => setSearch(e.target.value)} />

          <button type="submit">Search</button>
        </form>
      </div>
      {
        showRecommendations && 
          <div className={style["dropdown-content"]}>
          <div className={style["group"]}>
            {
              recommendationMovies?.length > 0 
              ? recommendationMovies?.map((item) => {
                  return (
                    <div onClick={() =>  onClick(item?.Title)}>
                      <RecomendationPane  title={item?.Title} poster={item?.Poster} year={item?.Year} id={item?.imdbID} key={item?.imdbID} />
                    </div>
                  )
                })
              : <p>Searching Recommendation..</p>
            }
          </div>
          </div>
        }
    </div>
    </div>
  )
}