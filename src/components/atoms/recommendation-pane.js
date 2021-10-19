import styles from "./recommendation-pane.module.sass"
import Link from "next/link"
export default function RecomendationPane({poster, title, year, id}) {
  return(
      <Link href={`/details/${id}`} >
        <div className={styles.recommendation}>
          <img src={poster != "N/A" ? poster : "/noimage.jpg"} />
          <div className={styles.info}>
            <div>{title}</div>
            <div>{year}</div>

          </div>
        </div>
      </Link>
  )
}