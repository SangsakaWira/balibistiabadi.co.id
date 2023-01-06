import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <Head>
        <title>PT Bali Bisti Abadi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          </div>
          <Image
            src="/logo-white.png"
            alt="Bali Bisti Logo"
            height={300}
            width={300}
            priority
          />
        </div>
        <a style={{ marginBottom: "10px",marginTop:"-40px" }} href={"https://www.canva.com/design/DAFW3JLa9gw/Vt25j-3IwwGjRAnCXXisgg/view?utm_content=DAFW3JLa9gw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"}>
          <button style={{ padding: "20px" }}>Download Company Profile (IND)</button>
        </a>
        <a style={{ marginBottom: "40px" }} href={"https://www.canva.com/design/DAFW5s-RZTc/U6TGDSXmjuLKCOTJXWl0Yg/view?utm_content=DAFW5s-RZTc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"} >
          <button style={{ padding: "20px" }}>Download Company Profile (ENG)</button>
        </a>
        <div className={styles.center}>
          <h2 className={inter.className} style={{ fontSize: "40px", marginTop: "-60px" }}>PT Bali Bisti Abadi</h2>
        </div>
        <div className={styles.center} style={{ marginTop: "-30px" }}>
          <p>We are still developing our website. Will be updated very soon.</p>
        </div>
        <div className={styles.center} style={{ marginTop: "-30px" }}>
          <p>Whatsapp: +6285899731884 Email: info@balibistiabadi.co.id</p>
        </div>
      </main>
    </>
  )
}
