import Layout from "../src/layout/main"
import MovieSnippet from "../src/components/molecules/movie-snippet"
import styles from '../styles/Home.module.css'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useFetchList } from "../src/hooks/useFetchList"
import NotAvailable from "../src/components/atoms/not-available";
import { useRouter } from "next/router";

export default function Episodes() {
  const dispatch = useDispatch();
  const { episodes } = useSelector(({ movies }) => movies);
  const { fetchEpisode, loading } = useFetchList()
  const [page, setPage] = useState(1)
  const { query } = useRouter()
  
  useEffect(async() => {
    await dispatch({
      type: "SET_DEFAULT_EPISODES",
      episodes: []
    })
    fetchEpisode(page, query.s)
  } ,[query])

  useEffect(() => {
    window.onscroll = () => {
      if(document.documentElement.scrollTop+ document.documentElement.offsetHeight == document.documentElement.scrollHeight ) {
        let pageTemp = page + 1
        fetchEpisode(pageTemp, query.s)
        setPage(pageTemp)
      }
    } 
  })


  return (
    <div className={styles.container}>
      <Layout>
        <div 
          className="row"
        >
          {
            episodes && episodes.length > 0 

             ? episodes.map((episode) => {
                return (
                  <div className="col col-3">
                    <MovieSnippet imdbId={episode?.imdbID} poster={episode?.Poster} year={episode?.Year} key={episode?.imdbID} name={episode?.Title} />
                  </div>
                )
              })
            : <NotAvailable />
          }
          {
            loading && <h1 style={{background: "white", color: "red", position: "fixed", bottom: "0", zIndex: "10000", padding: "10px"}} >Loading.....</h1>
          }
        </div>
      </Layout>
    </div>
  )
}
