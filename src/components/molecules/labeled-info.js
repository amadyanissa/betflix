import styles from "../../../styles/Details.module.css"
// import styles from "./group-info.module.sass"

export default function LabeledInfo({data, title}) {
  return (
    <div className={styles.groups}>
      <span className={styles.title}>{title}:</span>
      <span >{data}</span>
  </div>
  )
}