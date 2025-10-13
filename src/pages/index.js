import Layout from "../components/Layout/Layout";
import SliderOne from "../components/MainPage/SliderOne/SliderOne";
import AboutFour from "../components/MainPage/About/AboutOne";
import CTAOne from "../components/MainPage/CTA/CTAOne";
import AboutSix from "../components/MainPage/About/AboutTwo";
import CTAFour from "../components/MainPage/CTA/CTAFour";
import BlogHomeTwo from "../components/BlogPage/BlogHome";
import CTAThree from "../components/MainPage/CTA/CTAThree";
import Counter from "@/components/MainPage/Counter/Counter";
import Accordion from "@/components/MainPage/Accordion/Accordion";

export default function HomePage() {
  return (
    <Layout
      description="Witamy na stronie głównej Stowarzyszenia Aktywni na rzecz Bezpiecznego Wypoczynku. Dbamy o to by było bezpiecznie."
      keywords="stowarzyszenie, bezpieczny wypoczynek, wakacje, dzieci, strefa rodzica, bezpieczeństwo dzieci"
    >
      <SliderOne />
      <AboutFour />
      <CTAOne />
      <AboutSix />
      <CTAFour />
      <BlogHomeTwo />
      <CTAThree />
      {/*<Accordion items={[
        {
          title: "?",
          content: "."
        },
      ]} />
      <Counter end={1500} duration={3} className="custom-counter" />*/}
    </Layout>
  );
}