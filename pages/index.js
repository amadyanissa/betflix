import Head from 'next/head'
import Layout from "../src/layout/main"
import styles from '../styles/Home.module.css'
import SectionList from "../src/components/organisms/sectionList"

import { useEffect, useState } from 'react'
import { getMovieList, getSeriesList, getEpisodeList} from "../pages/api/endpoints"
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const {homeMovies, homeSeries, homeEpisodes} = useSelector(({ homeList }) => homeList);

  useEffect(async() => {
    const movieList = await getMovieList(1);
    const seriesList = await getSeriesList(1);
    const episodeList = await getEpisodeList(1);
    dispatch({
      type: "SET_HOME_MOVIE",
      movies: movieList?.Search?.length >=4 ? movieList?.Search.slice(0,4) : movieList?.Search
    })

    dispatch({
      type: "SET_HOME_SERIES",
      series: seriesList?.Search?.length > 4 ? seriesList?.Search.slice(0,4) : seriesList?.Search
    })
    dispatch({
      type: "SET_HOME_EPISODES",
      episodes: episodeList?.Search?.length > 4 ? episodeList?.Search.slice(0,4) : episodeList?.Search
    })

  } ,[])

  return (
    <div className={styles.container}>
      
      <Layout>
        <div>
          <SectionList sectionTitle="Film" list={homeMovies.length > 0 ? homeMovies : []} link={"/movies"} />
        </div>
        <div style={{marginTop: "2rem"}}>
          <SectionList sectionTitle="Series" list={homeSeries && homeSeries.length > 0 ? homeSeries : []} link={"/series"}/>
        </div>
        <div style={{marginTop: "2rem"}}>
          <SectionList sectionTitle="Episode" list={homeEpisodes && homeEpisodes.length > 0 ? homeEpisodes : []} link={"/episodes"} />
        </div>
      </Layout>
    </div>
  )
}
