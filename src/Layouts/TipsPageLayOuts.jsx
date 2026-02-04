import Loader from '../components/Fixed/Loader'
import NewsletterSignup from '../components/Others/Home/NewsletterSignup'
import TipsGrid from '../components/Others/Tips/TipsGrid'

const TipsPageLayOuts = () => {
    return (
        <div>

            <TipsGrid />

            <NewsletterSignup />

            <Loader />

        </div>
    )
}

export default TipsPageLayOuts
