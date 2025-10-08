import Layout from "../components/Layout/Layout";
import SliderOne from "../components/SliderOne/SliderOne";
import AboutFour from "../components/About/AboutOne";
import CTAOne from "../components/CTA/CTAOne";
import AboutSix from "../components/About/AboutTwo";
import CTAFour from "../components/CTA/CTAFour";
import BlogHomeTwo from "../components/Blog/BlogHome";
import CTAThree from "../components/CTA/CTAThree";

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
    </Layout>
  );
}