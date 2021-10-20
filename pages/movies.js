import Layout from "../src/layout/main"
import MovieSnippet from "../src/components/molecules/movie-snippet"
import styles from '../styles/Home.module.css'
import Loading from "../src/components/atoms/loading"

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useFetchList } from "../src/hooks/useFetchList"
import NotAvailable from "../src/components/atoms/not-available"

export default function Film() {
  const { movies } = useSelector(({ movies }) => movies);
  const [page, setPage] = useState(1)
  const {fetchMovies, loading} = useFetchList()
  const router = useRouter()
  const {query} = useRouter()
  const dispatch = useDispatch()

  useEffect(async() => {
    await dispatch({
      type: "SET_DEFAULT_MOVIE",
      movies: []
    })
    fetchMovies(page, query.s)
   
  },[query])

  useEffect(() => {
      window.onscroll = () => {
        if(document.documentElement.scrollTop+ document.documentElement.offsetHeight == document.documentElement.scrollHeight && router.pathname == "/movies") {
          let pageTemp = page + 1
          fetchMovies(pageTemp, query.s)
          setPage(pageTemp)
        }
      } 

   })

  const lookForSeries = () => {
    router.push({
      pathname: "/search",
      query: {
        s: query.s
      }
    })
  }


  return (
    <div className={styles.container}>
      <Layout>
        {
          query.s &&
            <h6 onClick={() => lookForSeries() } className={styles.want}><span>Not what you are looking for? Search series or episode</span></h6>
        }
        <div 
          className="row"
        >
          {
            movies &&
            movies.length > 0 
            ?
              movies.map((movie) => {
                return (
                  <div className="col col-3">
                    <MovieSnippet imdbId={movie?.imdbID} poster={movie?.Poster} year={movie?.Year} key={movie?.imdbID} name={movie?.Title} />
                  </div>
                )
              })
            : <NotAvailable />
          }

        {
          
          loading && <Loading />
        }
        </div>
      </Layout>
    </div>
  )
}
