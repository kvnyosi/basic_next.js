import Link from 'next/link'
import styles from './Header.module.css'

export default function index() {
  return (
    <header className={styles.container}>
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link href="/">Home</Link>
            </li>
            <li className={styles.item}>
                <Link href="/product">Product</Link>
            </li>
            <li className={styles.item}>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </header>
  )
}
