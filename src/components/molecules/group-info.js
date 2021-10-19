import styles from "../../../styles/Details.module.css"

export default function GroupInfo({data, title}) {
  return (
    <div className={styles.groups}>
      <span className={styles.title}>{title}:</span>
      {
        data?.map((item, index) => {
          return <a key={index} href={`https://google.com/search?q=${item}`} target="_blank">{item}</a>
        })
      }
  </div>
  )
}