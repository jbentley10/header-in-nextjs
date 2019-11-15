import '../styles/styles.css';

/* Component Layout */ 
const ImageTextSplit = () => (
    <div className="image-text-split px-12 text-center my-24">
        <div className="image-text-split__image-container w-2/5 sm:inline-block">
            {/* TODO Add Image */}
            <div className="image-text-split__image bg-gray-300 h-20 w-20"></div>
        </div>
        <div className="image-text-split__text-container w-2/5 text-left sm:inline-block">
            <h3 className="image-text-split__heading">Heading</h3>
            <p className="image-text-split__text">Lorem ipsum solor dut amet.</p>
        </div>
    </div>
);

export default ImageTextSplit;