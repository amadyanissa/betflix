import Layout from "../src/layout/main";
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import { getEpisodeList, getMovieList, getSeriesList } from "./api/endpoints";
import SectionList from "../src/components/organisms/sectionList";

export default function Search() {
  const { query } = useRouter()
  const [searchResultMovie, setSearchResultMovie] = useState([])
  const [searchResultSeries, setSearchResultSeries] = useState([])
  const [searchResultEpisodes, setSearchResultEpisodes] = useState([])

  useEffect(async() => {
    const data = await getMovieList({search: query.s})
    setSearchResultMovie(data?.Search?.length > 4 ? data?.Search?.slice(0,4) : data?.Search)

    const dataSeries = await getSeriesList({search: query.s})
    setSearchResultSeries(dataSeries?.Search?.length > 4 ? dataSeries?.Search?.slice(0,4) : dataSeries?.Search)

    const dataEpisodes = await getEpisodeList({search: query.s})
    setSearchResultEpisodes(dataEpisodes?.Search?.length > 4 ? dataEpisodes?.Search?.slice(0,4) : dataEpisodes?.Search)
  },[query])
  return(
    <div className={styles.container}>
      <Layout >
        <div>
          <SectionList sectionTitle="Film" list={searchResultMovie?.length > 0 ? searchResultMovie : []} link={`/movies?s=${query.s}`} />
          
        </div>

        <div style={{marginTop: "2rem"}}>
          <SectionList sectionTitle="Series" list={searchResultSeries?.length > 0 ? searchResultSeries : []} link={`/series?s=${query.s}`} />
          
        </div>

        <div style={{marginTop: "2rem"}}>
          <SectionList sectionTitle="Episode" list={searchResultEpisodes?.length > 0 ? searchResultEpisodes : []} link={`/episodes?s=${query.s}`} />
          
        </div>
      </Layout>
    </div>
  )
}