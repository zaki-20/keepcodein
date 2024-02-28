import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import MarqueeSection from "./components/MarqueeSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import CustomTech from "./components/CustomTech";
import FAQs from "./components/FAQs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Explore from "./components/Explore";

function App() {
  return (
    <>
      <Header/>
      <HeroSection />
      <MarqueeSection />
      <Services />
      <Explore />
      <AboutUs />
      <CustomTech />
      <FAQs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
