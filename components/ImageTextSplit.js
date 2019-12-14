import ProfileImage from './Images/ProfileImage';
import '../styles/styles.css';

/* Component Layout */ 
const ImageTextSplit = () => (
    <div className="image-text-split px-12 text-center bg-dark-background py-24 md:align-middle text-white">
        <div className="image-text-split__image-container w-2/5 sm:inline-block md:align-middle">
            <ProfileImage />
        </div>
        <div className="image-text-split__text-container w-2/5 text-left sm:inline-block md:align-middle">
            <h3 className="image-text-split__heading text-3xl">Heading</h3>
            <p className="image-text-split__text text-base">Lorem ipsum solor dut amet.</p>
        </div>
    </div>
);

export default ImageTextSplit;