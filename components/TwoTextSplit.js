import Button from './Button';
import '../styles/styles.css';
import VisibilitySensor from 'react-visibility-sensor';

function textLeftInView (partialVisibility) {
	if (partialVisibility == true) {
		const image = document.getElementById("two-text-split__left");
		image.classList.add('two-text-split__left--animate');
	}
}

function textRightInView (partialVisibility) {
	if (partialVisibility == true) {
		const text = document.getElementById("two-text-split__right");
		text.classList.add('two-text-split__right--animate');
	}
}

/* Component Layout */ 
const TwoTextSplit = ({splitText1, splitText2}) => (
    <div className="two-text-split bg-dark-background lines-background text-white sm:p-12 md:px-12 w-full h-full">
        <VisibilitySensor onChange={textLeftInView}>
            <div id="two-text-split__left" className="two-text-split__left left inline">
                <div className="left-quote sm:w-full md:w-1/2 text-left inline-block">
                    <div dangerouslySetInnerHTML={{ __html: splitText1 }} />
                </div>
                <div className="w-2/5 inline-block h-24" /> 
                <p>&nbsp;</p>           
            </div>
        </VisibilitySensor>
        <br />
        <br />
        <VisibilitySensor onChange={textRightInView}>
            <div id="two-text-split__right" className="two-text-split__right right inline">
                <div className="w-2/5 inline-block" />
                <div className="right-quote sm:w-full md:w-1/2 text-right inline-block mb-12">
                    <div dangerouslySetInnerHTML={{ __html: splitText2 }} />
                </div>
            </div>
        </VisibilitySensor>

        <style jsx>{`
        
        `}</style>
    </div>
);

export default TwoTextSplit;