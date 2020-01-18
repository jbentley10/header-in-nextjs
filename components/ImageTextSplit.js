import '../styles/styles.css';
import PropTypes from 'prop-types';

/* Component Layout */ 
const ImageTextSplit = (props) => {
	const {
		copy,
		imageSrc,
		imageAlt
	} = props 

	return (
		<div className="image-text-split p-12 text-center bg-dark-background md:align-middle text-white">
			<div className="image-text-split__image-container sm:text-center sm:my-6 md:my-0 sm:m-auto sm:w-3/5 md:w-2/5 sm:block md:inline-block md:align-middle">
			<img className="rounded-full h-full sm:w-full md:w-4/6 flex items-center justify-center" src={imageSrc} alt={imageAlt} />
			</div>
			<div className="image-text-split__text-container sm:w-full md:w-3/5 text-left sm:inline-block md:align-middle">
				{copy}
			</div>
		</div>
	)
}

ImageTextSplit.propTypes = {
	copy: PropTypes.any,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string
}

ImageTextSplit.defaultProps = {
  copy: 
		<div>
			<h3 className="image-text-split__heading text-3xl">Hello! My name is John Bentley.</h3>
			<p className="image-text-split__text sm:text-xl text-base">I am a freelance web designer and digital marketer with over five years of experience. I’ve worked on many different projects, with clients ranging from small non-profits to large, fortune 500 companies.</p>
			<p>&nbsp;</p>
			<p className="image-text-split__text sm:text-xl text-base">Hire me for your next digital project, and get results!</p>
		</div>,
	imageSrc: '',
	imageAlt: ''
}


export default ImageTextSplit;