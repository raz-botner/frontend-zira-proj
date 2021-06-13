
import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
   
export default function Header() {

    return (
        <header>
            <Link href="/">
                <a>
                    <img src="https://images.squarespace-cdn.com/content/5dc0d51208406e59a454c423/1602103957405-QDNUXZRV4OBYYLCMW43B/zira-logo-black.png?content-type=image%2Fpng"
                    width="150px" className={styles.logo}/>
                </a>
            </Link>
        </header>
    )
}
