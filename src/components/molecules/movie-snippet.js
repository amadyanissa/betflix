import { useState } from "react"
import { useRouter } from "next/router" 

import style from "./movie-snippet.module.sass"
import Swal from 'sweetalert2'
import Link from 'next/link'

export default function MovieSnippet({name, poster, year, imdbId}) {
  const [hover, setHover] = useState(false)
  const router = useRouter()
  const openModal = () => {
    Swal.fire({
      imageUrl: poster != "N/A" ? poster : "/noimage.jpg",
      confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> See Detail!'
      })
      .then((result) => {
        if(result.isConfirmed) {
          router.push(`/details/${imdbId}`)
        }
      })
  }
  return (
    <div 
      onMouseEnter={() => {
        setHover(true)
      }} 
      onMouseLeave={() => {
        setHover(false)
      }}
      className={style["movie-snippet"]} 
    >
      <img onClick={() => openModal()} src={poster != "N/A" ? poster : "/noimage.jpg"} alt={name} />
      <div className={hover ? style['hover']: ""}>
        <span >{name} ({year})</span>
        {
          hover &&
          <div className={style["detail"]}>
            <span>
              <Link href={`/details/${imdbId}`}>See Details</Link>
            </span>
          </div>
        }

      </div>
    </div>
  )
}
