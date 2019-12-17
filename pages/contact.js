import '../styles/styles.css';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div>
      <Navigation />
      <CallToAction />
      <Footer />
    </div>
  );
}