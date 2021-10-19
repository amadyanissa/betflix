import Layout from "../src/layout/main"
import MovieSnippet from "../src/components/molecules/movie-snippet"
import styles from '../styles/Home.module.css'
import Loading from "../src/components/atoms/loading"

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useFetchList } from "../src/hooks/useFetchList"
import { useRouter } from "next/router"

export default function Series() {
  const {series} = useSelector(({ series }) => series);
  const {fetchSeries, loading} = useFetchList()
  const [page, setPage] = useState(1)
  const { query } = useRouter()
  const dispatch = useDispatch()

  useEffect(async() => {
   await dispatch({
    type: "SET_DEFAULT_SERIES",
    series: []
   })
    fetchSeries(page, query.s)
    
  } ,[query])


  useEffect(() => {
    window.onscroll = () => {
      if(document.documentElement.scrollTop+ document.documentElement.offsetHeight == document.documentElement.scrollHeight ) {
        let pageTemp = page + 1
        fetchSeries(pageTemp, query.s)
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
            series && series.length > 0 &&
            series.map((serie) => {
              return (
                <div className="col col-3">
                  <MovieSnippet imdbId={serie?.imdbID} poster={serie?.Poster} year={serie?.Year} key={serie?.imdbID} name={serie?.Title} />
                </div>
              )
            })
          }
          {
          
            loading && <Loading />
          }
        </div>
      </Layout>
    </div>
  )
}
