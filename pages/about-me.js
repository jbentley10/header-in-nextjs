import '../styles/styles.css';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import ImageHeader from '../components/ImageHeader';
import ImageTextSplit from '../components/ImageTextSplit';
import ImageTextButtonSplit from '../components/ImageTextButtonSplit';
import CallToAction from '../components/CallToAction';

const CTAText = () => 
  <div>
    <h2 className="text-2xl">Interested in learning more?</h2>
    <p className="text-sm"><a href="mailto:john@jwbentley.com" className="text-link-purple"> Contact me</a> directly.</p>
  </div>
;

export default function Home() {
  return (
    <div>
      <Layout 
        pageMeta={{
          title: " | About Me",
          keywords: ["freelance", "web designer", "web developer", "portland", "oregon"],
          description: "Get know my background including what I do, how design shaped my career, and what I like to do in my spare time."
        }}
      >
        <ImageHeader 
          heading={"About Me"}
        />
        <ImageTextSplit>
        <img className="rounded-full h-full sm:w-full md:w-4/6 flex items-center justify-center" src="../static/me-flute.jpg" alt="John Bentley Freelance Web Designer" />
        </ImageTextSplit>
        <ImageTextButtonSplit />
        <CallToAction 
          ctaText={<CTAText />}
        />
      </Layout>
    </div>
  );
}