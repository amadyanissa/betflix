import Layout from "../../src/layout/main"
import GroupInfo from "../../src/components/molecules/group-info"
import LabeledInfo from "../../src/components/molecules/labeled-info"

import { useRouter } from 'next/router'
import { getById } from "../api/endpoints"
import { useEffect, useState } from 'react';
import styles from '../../styles/Details.module.css'
import { useDispatch } from "react-redux"
import DetailLoader from "../../src/components/atoms/detail-loader"

export default function Details() {
 const router = useRouter();
 const { id } = router.query
 const [loading, setLoading] = useState(false)
 const [data, setData] = useState(null)
 const dispatch = useDispatch()

 useEffect(async() => {
  setLoading(true)
  const detail = await getById(id)
  setData(detail)
  dispatch({
    type: "SHOW_RECOMMENDATION",
    showRecommendations: false
  })
  setLoading(false)
 },[id])
 
  return (
    <div >
      <Layout>
        {
          loading 
            ? <DetailLoader />
            
            :  <div className="row">
                <img className="col col-4" src={data?.Poster != "N/A" ? data?.Poster : "/noimage.jpg"}  alt={data?.Title}/>
                <div className="col col-8">
                  <h1 style={{marginTop: 0}}>{data?.Title}</h1>
                  <div className={styles['mini-infos']}>
                    <div>{data?.Year}</div>
                    <div>{data?.Rated}</div>
                    <div>{data?.Runtime}</div>
                  </div>
                  <GroupInfo data={data?.Actors?.split(", ")} title={"Pemeran"} />
                  <GroupInfo data={data?.Genre?.split(", ")} title={"Genre"} />
                  <GroupInfo data={data?.Director?.split(", ")} title={"Pemeran"} />
                  
                  <h2 className={styles.rating}>Ratings</h2>
                  {
                    data?.Ratings?.map((item, index) => {
                      return (
                        <LabeledInfo key={`label-${index}`} data={item?.Value} title={item?.Source} />
                      )
                    })
                  }
                <h2 className={styles.rating}>Plot</h2>
                <p>{data?.Plot}</p>
                </div>

              </div>
        }
      </Layout>
    </div>
  )
}
