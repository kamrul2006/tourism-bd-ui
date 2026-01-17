import React from 'react'
import Hero from '../components/Others/Home/Banner'
import PopularDestinations from '../components/Others/Home/PopularDestinations'
import PlanYourTrip from '../components/Others/Home/PlanYourTrip'
import FeaturedExperience from '../components/Others/Home/FeaturedExperience'

const HomePageLayOut = () => {
    return (
        <div>

            <Hero />

            <PopularDestinations />

            <PlanYourTrip />

            <FeaturedExperience />
        </div>
    )
}

export default HomePageLayOut
