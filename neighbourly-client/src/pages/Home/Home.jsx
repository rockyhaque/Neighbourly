import Categories from "../../components/Categories/Categories";
import Helmet from "react-helmet";
import Services from "../../components/Services/Services";
import OurSpeciality from "../../components/OurSpeciality/OurSpeciality";
import FAQ from "../../components/FAQ/FAQ";
import GradientHero from "../../components/HeroSection/GradientHero";
import OfferSection from "../../components/Offer/Offer";
import NewsletterSection from "../../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Neighbourly | Reliable services at your doorstep</title>
      </Helmet>
      <GradientHero />
      <div className="my-10">
        <Categories />
      </div>

      <Services />
      <OfferSection />
      <FAQ />
      <div>
        <NewsletterSection />
      </div>
      <OurSpeciality />
    </div>
  );
};

export default Home;
