import React from "react";

import { Cta } from "../components/Cta";
import { FAQ } from "../components/FAQ";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Pricing } from "../components/Pricing";
import { ContactUS } from "@/components/ContactUs";
import { ScrollToTop } from "../components/ScrollToTop";
import { Services } from "../components/Services";

import { getAnalytics, logEvent } from "firebase/analytics";
import "./homePage.css";

const Home: React.FC = () => {
  const analytics = getAnalytics();
  logEvent(analytics, "checked_site");

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Cta />
      {/*<RegisterForTest />*/}
      <Pricing />
      <ContactUS />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
