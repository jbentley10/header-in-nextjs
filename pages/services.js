import '../styles/styles.css';
import Navigation from '../components/Navigation';
import ImageHeader from '../components/ImageHeader';
import ImageTextSplit from '../components/ImageTextSplit';
import ImageTextButtonSplit from '../components/ImageTextButtonSplit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DotsTransition from '../components/images/DotsTransition';
import HorizontalBar from '../components/images/HorizontalBar';
import CircleList from '../components/CircleList';
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
        heading={"Services"}
      />

      <div className="heading-container w-full h-auto bg-dark-background p-10">
        <FontAwesomeIcon icon="check-square" className="text-6xl shadow-none inline-block" />
        <h2 className="bg-dark-background text-white">Web Design and Development</h2>
      </div>

      <div className="two-column-container bg-dark-background text-white p-10 align-top">
        <div className="w-1/2 h-full inline-block align-top">
          <h3>My design tools:</h3>
          <ul>
            <li>Sketch</li>
            <li>Adobe XD</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Balsamiq Mockups</li>
            <li>UI Stencils</li>
          </ul>
        </div>
        <div className="w-1/2 h-full inline-block align-top">
          <h3>My development tools:</h3>
          <ul>
            <li>HTML 5</li>
            <li>CSS3 (PostCSS, TailwindCSS, SASS)</li>
            <li>Javascript (React, AngularJS)</li>
          </ul>
        </div>
      </div>

      <CircleList 
        Heading={"Tools Used"}
        Tool1Name={"HTML"}
        Tool2Name={"CSS"}
        Tool3Name={"Adobe XD"}
      />

      <DotsTransition />
      <HorizontalBar />
      <CallToAction 
        ctaText={<CTAText />}
      />
      <Footer />
    </div>
  );
}