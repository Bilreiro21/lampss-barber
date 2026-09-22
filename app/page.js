import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import Work from "../components/Work";
import About from "../components/About";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesPreview />
        <Work />
        <About />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
