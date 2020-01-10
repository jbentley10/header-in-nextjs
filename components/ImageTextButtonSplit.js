import '../styles/styles.css';
import ProfileImage from './Images/ProfileImage';
import Button from './Button.js';

/* Component Layout */ 
const ImageTextButtonSplit = () => (
    <div className="image-text-split px-12 text-center bg-dark-background py-24 md:align-middle text-white">        
        <div className="image-text-split__text-container w-2/5 text-left sm:inline-block md:align-middle">
            <h3 className="image-text-split__heading text-3xl">Hello! My name is John Bentley.</h3>
            <p className="image-text-split__text text-base">I am a freelance web designer and digital marketer with over five years of experience. I’ve worked on many different companies, with clients ranging from small, grassroots non-profits to large, fortune 500 companies.</p>
            <p>&nbsp;</p>
            <p className="image-text-split__text text-base">Hire me for your next digital project, and get results!</p>  
            <p>&nbsp;</p>          
            <Button 
              buttonText="Button"
            />
        </div>
        <div className="image-text-split__image-container w-2/5 sm:inline-block md:align-middle">
          <img className="rounded-1/2 h-full w-4/6 flex items-center justify-center" src="../static/photo-booth.jpg" alt="John Bentley Freelance Web Designer" />
        </div>
    </div>
);

export default ImageTextButtonSplit;