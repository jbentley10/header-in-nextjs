import '../styles/styles.css';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import Image from 'next/image';
import Button from './Button.js';

function image1InView (partialVisibility) {
	if (partialVisibility == true) {
		const image = document.getElementById("image-text-split__image-1");
		image.classList.add('image-text-split__image--animate');
	}
}

function image2InView (partialVisibility) {
	if (partialVisibility == true) {
		const image = document.getElementById("image-text-split__image-2");
		image.classList.add('image-text-split__image--animate');
	}
}

/* Component Layout */ 
const ImageTextButtonSplit = (props) => {
  const {
    copy,
  } = props 

  return (
    <div className="image-text-button-split px-12 text-center bg-dark-background py-24 md:align-middle text-white">              
      <div className="image-text-button-split__text-container sm:w-full md:w-1/2 md:mr-20 text-left sm:inline-block md:align-middle">
        <div dangerouslySetInnerHTML={{ __html: copy }} />
      </div>
      
      <div className="image-text-button-split__image-container sm:text-center sm:my-8 md:mb-12 sm:m-auto sm:w-full md:w-2/5 sm:block md:inline-block md:align-middle">
        <VisibilitySensor onChange={image1InView}>                    
          <Image unsized id="image-text-split__image-1" className="image-text-split__image rounded-1/2 sm:my-10 md:my-5 sm:h-full sm:w-full md:w-5/6 flex items-center justify-center" src="/../public/me-hike.jpg" alt="Climbing and hiking just outside of Portland" loading="lazy" />          
        </VisibilitySensor>
        <VisibilitySensor onChange={image2InView}>                    
          <Image unsized id="image-text-split__image-2" className="image-text-split__image rounded-1/2 sm:my-10 md:my-5 sm:h-full sm:w-full md:w-5/6 flex items-center justify-center" src="/../public/me-nepal.jpg" alt="Trekking through the Himalayas in the spring of 2018" loading="lazy" />          
        </VisibilitySensor>
      </div>

      <Button 
        buttonText="Follow My Adventures"
        linkHref="https://www.instagram.com/mistahbentley"
        targetBlank={true}
      />
    </div> 
  )
}

ImageTextButtonSplit.propTypes = {
	copy: PropTypes.any
}

ImageTextButtonSplit.defaultProps = {
  copy: 
		<div>
			<h3 className="image-text-split__heading text-3xl">Hello! My name is John Bentley.</h3>
			<p className="image-text-split__text sm:text-xl text-base">I am a freelance web designer and digital marketer with over five years of experience. I’ve worked on many different companies, with clients ranging from small, grassroots non-profits to large, fortune 500 companies.</p>
			<p>&nbsp;</p>
			<p className="image-text-split__text sm:text-xl text-base">Hire me for your next digital project, and get results!</p>
		</div>
}

export default ImageTextButtonSplit;