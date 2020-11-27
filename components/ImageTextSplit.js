// Import dependencies
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

// Import components
import Image from 'next/image'
import Button from './Button';

function imageInView (partialVisibility) {
	if (partialVisibility == true) {
		const image = document.getElementById("image-text-split__image");
		image.classList.add('image-text-split__image--animate');
	}
}

function textInView (partialVisibility) {
	if (partialVisibility == true) {
		const text = document.getElementById("image-text-split__text-container");
		text.classList.add('image-text-split__text-container--animate');
	}
}

/* Component Layout */ 
const ImageTextSplit = (props) => {
	const {
		heading,
		paragraph,
		copy,
		imageSrc,
		imageAlt
	} = props 

	return (
		<div className="image-text-split p-12 text-center bg-dark-background md:align-middle text-white">
			<div className="image-text-split__image-container sm:text-center sm:my-6 md:my-0 sm:m-auto sm:w-3/5 md:w-2/5 sm:block md:inline-block md:align-middle">
			<VisibilitySensor onChange={imageInView}>			
				<Image width={500} height={500} id="image-text-split__image" alt={imageAlt} className="image-text-split__image rounded-full h-full sm:w-full md:w-4/6 flex items-center justify-center" src={"/../static/img/jpg/" + imageSrc + ".jpg"} loading="lazy" />        
			</VisibilitySensor>
			</div>
			<VisibilitySensor onChange={textInView}>
				<div id="image-text-split__text-container" className="image-text-split__text-container sm:w-full md:w-3/5 text-left sm:inline-block md:align-middle">
					<div>
						<div className="overflow-x-hidden">
							<h3 className="image-text-split__heading text-3xl pb-4">{heading}</h3>
							<p>{paragraph}</p>
							<p>&nbsp;</p>
							<p>&nbsp;</p>
						</div>
						
						{ copy !== null &&
							<div>
								<div dangerouslySetInnerHTML={{ __html: copy}} />
								<br />
								<br />
							</div>
						}
						
						<div>
							<Button
								buttonText={'Learn More About Me'}
								className={'button text-left text-white bg-dark-background'}
								linkHref={'/about-me'}
								targetBlank={false}
							/>
						</div>
					</div>  
				</div>
			</VisibilitySensor>
		</div>
	)
}

ImageTextSplit.propTypes = {
	heading: PropTypes.string,
	paragraph: PropTypes.string,
	copy: PropTypes.string,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string
}

ImageTextSplit.defaultProps = {
	heading: "",
	paragraph: "",
	copy: PropTypes.string,
	imageSrc: '',
	imageAlt: ''
}


export default ImageTextSplit;