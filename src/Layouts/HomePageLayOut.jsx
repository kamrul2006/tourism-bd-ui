import React from 'react'
import Hero from '../components/Others/Home/Banner'
import PopularDestinations from '../components/Others/Home/PopularDestinations'
import PlanYourTrip from '../components/Others/Home/PlanYourTrip'
import FeaturedExperience from '../components/Others/Home/FeaturedExperience'
import CallToAction from '../components/Others/Home/CallToAction'
import WhyChooseUs from '../components/Others/Home/WhyChooseUs'
import InteractiveMapPreview from '../components/Others/Home/InteractiveMapPreview'
import AchievementsStats from '../components/Others/Home/AchievementsStats'
import NewsletterSignup from '../components/Others/Home/NewsletterSignup'
import FoodOfBangladesh from '../components/Others/Home/FoodOfBangladesh'
import Partners from '../components/Others/Home/Partners'

const HomePageLayOut = () => {
    return (
        <div>

            <Hero />

            <PopularDestinations />

            <PlanYourTrip />

            <FeaturedExperience />

            <CallToAction />

            <WhyChooseUs />

            <InteractiveMapPreview />

            <AchievementsStats />

            <FoodOfBangladesh />

            <NewsletterSignup />

            <Partners />
        </div>
    )
}

export default HomePageLayOut
