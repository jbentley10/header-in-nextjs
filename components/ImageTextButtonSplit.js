import '../styles/styles.css';
import PropTypes from 'prop-types';

import Button from './Button.js';

/* Component Layout */ 
const ImageTextButtonSplit = (props) => {
  const {
    copy,
  } = props 

  return (
    <div className="image-text-split px-12 text-center bg-dark-background py-24 md:align-middle text-white">        
      <div className="image-text-split__text-container sm:w-full md:w-1/2 md:mr-20 text-left sm:inline-block md:align-middle">
        {copy}
      </div>

      <div className="image-text-split__image-container sm:text-center sm:my-8 md:mb-12 sm:m-auto sm:w-full md:w-2/5 sm:block md:inline-block md:align-middle">
        <img className="rounded-1/2 sm:my-10 md:my-5 sm:h-full sm:w-full md:w-5/6 flex items-center justify-center" src="../static/me-hike.jpg" alt="Climbing and hiking just outside of Portland" />
        <img className="rounded-1/2 sm:my-10 md:my-5 sm:h-full sm:w-full md:w-5/6 flex items-center justify-center" src="../static/me-nepal.jpg" alt="Trekking through the Himalayas in the spring of 2018" />
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