// @ts-nocheck
import Link from 'next/link'
import styles from './page.module.css'

const PageLink = ({href, text}) => {
  return <Link className={styles.link} {...{href}}>{text}</Link>
}

export default function Page() {
  return <div>
    <PageLink href="/yoga" text="Yoga"/>
    <PageLink href="/camino-rojo" text="Camino Rojo"/>
  </div>
}
