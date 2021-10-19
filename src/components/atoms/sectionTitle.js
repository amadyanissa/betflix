import styled from "styled-components"
import Link from "next/link"
import style from "./section-title.module.sass"

export default function SectionTitle({title, link}) {
  return(
    <div className={style["container-section"]}>
      <span className={style["title"]}>{title}</span>
      {
        link && 
        <span className={style["more"]}>
          <Link href={link}>Selengkapnya</Link>
        </span>
      }
    </div>
  )
}