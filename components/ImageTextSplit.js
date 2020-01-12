import ProfileImage from './Images/ProfileImage';
import '../styles/styles.css';

/* Component Layout */ 
const ImageTextSplit = () => (
    <div className="image-text-split p-12 text-center bg-dark-background md:align-middle text-white">
        <div className="image-text-split__image-container sm:text-center sm:my-6 md:my-0 sm:m-auto sm:w-3/5 md:w-2/5 sm:block md:inline-block md:align-middle">
            <ProfileImage />
        </div>
        <div className="image-text-split__text-container sm:w-full md:w-2/5 text-left sm:inline-block md:align-middle">
            <h3 className="image-text-split__heading text-3xl">Hello! My name is John Bentley.</h3>
            <p className="image-text-split__text sm:text-xl text-base">I am a freelance web designer and digital marketer with over five years of experience. I’ve worked on many different companies, with clients ranging from small, grassroots non-profits to large, fortune 500 companies.</p>
            <p>&nbsp;</p>
            <p className="image-text-split__text sm:text-xl text-base">Hire me for your next digital project, and get results!</p>
        </div>
    </div>
);

export default ImageTextSplit;