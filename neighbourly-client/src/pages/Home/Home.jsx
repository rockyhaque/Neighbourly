import Categories from "../../components/Categories/Categories";
import HeroSection from "../../components/HeroSection/HeroSection";
import Helmet from "react-helmet";
import Services from "../../components/Services/Services";
import OurSpeciality from "../../components/OurSpeciality/OurSpeciality";
import FAQ from "../../components/FAQ/FAQ";
import GradientHero from "../../components/HeroSection/GradientHero";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Neighbourly | Reliable services at your doorstep</title>
      </Helmet>

      {/* <HeroSection /> */}
      <GradientHero />
      <div className="my-10">
        <Categories />
      </div>

      <Services />

      <FAQ />
      <OurSpeciality />



    </div>
  );
};

export default Home;
