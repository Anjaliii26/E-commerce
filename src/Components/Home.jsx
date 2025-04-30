import React from 'react'
import { HeroSection } from './HeroSection'
import { Services } from './Services'
import { Trusted } from './Trusted'
import { FeatureProducts } from './FeatureProducts'

export const Home = () => {
  const data={
    name:"OUR STORE"
  }
  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProducts/>
    <Services/>
    <Trusted/>
    </>
  )
}
