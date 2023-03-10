import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const onClickIndo = ()=>{
    window.location.href = "https://www.canva.com/design/DAFW3JLa9gw/Vt25j-3IwwGjRAnCXXisgg/view?utm_content=DAFW3JLa9gw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
  }

  const onClickEnglish = ()=>{
    window.location.href = "https://www.canva.com/design/DAFW5s-RZTc/U6TGDSXmjuLKCOTJXWl0Yg/view?utm_content=DAFW5s-RZTc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
  }

  const onClickRegis = ()=>{
    window.location.href = "https://forms.gle/FRzhiPKmvhRiaLmw7"
  }
  
  return (
    <>
      <Head>
        <title>PT Bali Bisti Abadi</title>
        <meta name="description" content="Distributor resmi PT Pupuk Indonesia, menerima pemesanan urea, NPK, pupuk on subsidi lainnya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div style={{ width: '100%', height: '100%', position: 'relative',marginTop:"-40px" }}>
          </div>
          <Image
            src="/logo-white.png"
            alt="Bali Bisti Logo"
            height={300}
            width={300}
            priority
          />
        </div>
        <button style={{ marginBottom: "10px",marginTop:"-40px",padding: "20px"  }} onClick={onClickIndo}>Unduh Profil Perusahaan (IND)</button>
        <button style={{ padding: "20px",marginBottom:"40px" }} onClick={onClickEnglish}>Download Company Profile (ENG)</button>
        <button style={{ padding: "20px",marginBottom: "60px",marginTop:"-30px" }} onClick={onClickRegis}>Tertarik Menjadi Agen</button>
        <div className={styles.center}>
          <h2 className={inter.className} style={{ fontSize: "40px", marginTop: "-60px" }}>PT Bali Bisti Abadi</h2>
        </div>
        <div className={styles.center} style={{ marginTop: "-30px" }}>
          <p>Website kami masih dalam pengembangan, silahkan unduh company profile kami untuk mengetahui informasi terkait perusahaan kami.</p>
        </div>
        <div className={styles.center} style={{ marginTop: "5px" }}>
          <p>Whatsapp: +6285899731884 Email: info@balibistiabadi.co.id</p>
        </div>
      </main>
    </>
  )
}
