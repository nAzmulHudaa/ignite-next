/* eslint-disable @next/next/no-page-custom-font */
import IndexView from '../src/views/Home/IndexView';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME | IYF</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Condiment&family=Poppins:ital,wght@0,300;0,400;0,600;1,600&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=MonteCarlo&display=swap" rel="stylesheet" />
        <script async src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"></script>
        <script async src="js/jquery-1.11.0.min.js"></script>
        <script async src="js/bootstrap.min.js"></script>
        <script async src="js/wow.min.js"></script>
        
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
      </Head>

      <IndexView />

    </div>
  )
}
