import Head from 'next/head'
import Navbar from '@/ui/Navbar'
import Generator from '@/ui/Generator'
import Footer from '@/ui/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marketizer</title>
        <meta name="description" content="Experimental AI marketing generator with GPT-3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />  
      <Generator />
      <Footer />
    </>
  )
}
