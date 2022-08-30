import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from '../components/Main'
import Cards from '../components/Cards'
import Cards2 from '../components/Cards2'
import Cards3 from '../components/Cards3'

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-full bg-gradient-to-br from-gray-900 to-slate-800">
      <Head>
        <title>NiceShoes Smart Lottery</title>
        <meta name="description" content="A Blockchain lottery for high end and rare shoes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <div className='flex flex-col lg:flex-row'>
        <Cards />
        <Cards2 />
        <Cards3 />
      </div>
    </div>
  )
}
