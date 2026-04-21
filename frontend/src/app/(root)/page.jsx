import Banner from '@/Components/Banner'
import ComboPackage from '@/Components/ComboPackage'
import Facilities from '@/Components/Facilities'
import Featured from '@/Components/Featured'
import HomeProductReview from '@/Components/HomeProductReview'
import Team_Member from '@/Components/Team_Member'
import TopCatagories from '@/Components/TopCatagories'
import React from 'react'

const page = () => {
  return (
    <>
    {/* <Banner />
    <Featured /> 
    <TopCatagories />
    <Facilities /> */}
    <ComboPackage />
    {/* <HomeProductReview />  */}
    <Team_Member />
    </>
  )
}

export default page