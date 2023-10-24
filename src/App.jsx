import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Topbar from "./components/Topbar";
import Services from "./components/Services";
import CTABanner from "./components/CTABanner";
import Popular from "./components/Plans";
import Testimonials from "./components/Testimonials";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Services />
      <CTABanner />
      <Popular />
      <Testimonials />
      <MyFooter />
    </>
  );
}

export default App;
