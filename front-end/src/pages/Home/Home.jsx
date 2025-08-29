import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import LastesCollection from '../../components/LastesCollection/LastesCollection'
import BestSeller from '../../components/BestSeller/BestSeller'
import OurPolicy from '../../components/OurPolicy/OurPolicy'
import NewLetter from '../../components/NewsLetter/NewLetter'

const Home = () => {
  return (
    <>
      <Hero/>
      <LastesCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewLetter/>
    </>
  )
}

export default Home