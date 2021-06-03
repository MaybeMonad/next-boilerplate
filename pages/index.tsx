import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className='container'>
      <Head>
        <title>Next.js Based Boilerplate</title>
        <meta name='description' content='Next.js Based Boilerplate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-2xl'>Next.js Based Boilerplate</h1>
      <p>
        GitHub:{' '}
        <a href='https://github.com/jinyang-io/next-boilerplate'>
          https://github.com/jinyang-io/next-boilerplate
        </a>
      </p>
    </div>
  )
}
