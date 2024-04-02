import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";
import FeaturedProduct from "../components/FeaturedProduct";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import StickyActionBtn from "../components/StickyActionBtn";

function HomePage() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <FeaturedProduct />
            <Testimonials />
            <Contact bgCol={"white"} acCol={"gdcgreen"} />
            <Footer />
            <StickyActionBtn />
        </>
    );
}

export default HomePage;
