import React from 'react'
import Hero from '../components/Hero'
import Row from '../components/Row'
import requests from '../Request'




function Home() {
  return (
    <div>
        <Hero />
        <Row title='Up Coming' fetchURL={requests.requestUpcoming} />
        <Row title='Popular' fetchURL={requests.requestPopular} />
        <Row title='Trending' fetchURL={requests.requestTrending} />
        <Row title='Top rated' fetchURL={requests.requestTopRated} />

    </div>
  )
}

export default Home