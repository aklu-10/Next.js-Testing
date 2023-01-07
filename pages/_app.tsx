import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar.tsx'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(()=>
  {
    document.onload=()=>
    {
       console.log(123);
    }
  },[])

  return (
  
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
