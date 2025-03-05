
import Navbar from "../compontent/Navbar/Navbar";
import Hero from "../compontent/Hero/Hero";
import { Banner, Banner1 } from "../compontent/Banner/Banner";
import { Content, Content1, Content2 } from "../compontent/mains/Content";
import Footer2 from "../compontent/Footer/Footer2";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Content />
      <Content1 />
      <Content2 />
      <Banner1 />
      <Footer2 />
    </>
  );
};

export default Home;
