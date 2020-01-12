import '../styles/styles.css';
import Navigation from '../components/Navigation';
import ImageHeader from '../components/ImageHeader';
import ImageTextSplit from '../components/ImageTextSplit';
import ImageTextButtonSplit from '../components/ImageTextButtonSplit';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const CTAText = () => 
  <div>
    <h2 className="text-2xl">Interested in learning more?</h2>
    <p className="text-sm"><a href="mailto:john@jwbentley.com" className="text-link-purple"> Contact me</a> directly.</p>
  </div>
;

export default function Home() {
  return (
    <div>
      <Navigation />
      <ImageHeader 
        heading={"About Me"}
      />
      <ImageTextSplit>
        <img src="../static/me-flute.jpg" />
      </ImageTextSplit>
      <ImageTextButtonSplit />
      <CallToAction 
        ctaText={<CTAText />}
      />
      <Footer />
    </div>
  );
}