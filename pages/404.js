
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className="notFound">
                <h1>That page cannot be found</h1>
                <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
                <Image src='/not-found.png' alt="not found" width="800" height="500"/>
            </div>
        </div>
    )
}
