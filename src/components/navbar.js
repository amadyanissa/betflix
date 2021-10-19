import style from "./navbar.module.sass"
import Image from 'next/image'
import Link from 'next/link'

import SearchInput from "../components/atoms/search-input"
export default function Navbar() {
  return (
    <div className={style['main-header']}>
      <div className={style['left-side']}>
        <Link href="/" >
          <Image className={style['logo']} src="/betflix-logo1.png" alt="logo" width="124" height="35"  />
        </Link>
        <div className={style['common-items']}>
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/movies">Movies</Link>
          </div>
          <div>
            <Link href="/series">Series</Link>
          </div>
          <div>
            <Link href="/episodes">Episodes</Link>
          </div>
        </div>
      </div>
      <div className={style['right-side']}>
        <SearchInput />
        {/* <i className="fas fa-search"></i> */}
      </div>
    </div>
  )
}