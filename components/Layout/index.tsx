import Header from '../Header'
import Footer from '../Footer'
import {ReactNode} from 'react'
import styles from './Layout.module.css'
import Head from 'next/head'
interface LayoutProps {
    children : ReactNode
    pageTitle : string
}

export default function Layout(props: LayoutProps) {
    const {children, pageTitle} = props;
    return (
    <div className={styles.container}>
        <Head>
            <title>Next.js Basic | {pageTitle}</title>
            <meta name="description" content="Website Next js basic" />
        </Head>
        <Header/>
        <div className={styles.content}>
            {children}
        </div>
        <Footer/>
    </div>
  )
}
