import {useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/404.module.css'

export default function Cust404() {

    const router =  useRouter();
    useEffect(()=> {
        setTimeout( ()=> {
            router.push('/');
        }, 2000)
    }, [])
    return (
        <div className={styles.parent}>
            <h1 className={styles.title}>Tidak ada cok halamannya!!!</h1>
        </div>
    )
}
