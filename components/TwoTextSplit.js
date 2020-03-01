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
const TwoTextSplit = () => (
    <div className="two-text-split bg-dark-background lines-background text-white sm:p-12 md:px-12 w-full h-full">
        <VisibilitySensor onChange={textLeftInView}>
            <div id="two-text-split__left" className="two-text-split__left left inline">
                <div className="left-quote sm:w-full md:w-1/2 text-left inline-block">
                    <p className="sm:text-xl text-base">"I cannot overstate how much John Bentley Creative has 
                        done to grow our nonprofit over the past 2+ years. John created our logo, developed our 
                        website, has crafted email and social media campaigns, performed analytics on our external 
                        communications, and is now configuring a CRM. Thanks in no small part to John, our 
                        organization has been able to raise and spend over $160,000 towards immigrant legal 
                        defense, which has helped 24 people get released from detention centers and reunite 
                        with their families."
                    </p>
                    <p>&nbsp;</p>
                    <p className="sm:pt-4 md:pt-0 text-lg"><strong>Cameron Coval,</strong> Executive Director, Pueblo Unido PDX</p>                
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
                    <p className="sm:text-xl text-base">"My website was slow, so people left before the pages 
                        could load … I reached out to John and he was wonderful! He not only fixed the 
                        problems, but he also empowered me by teaching some web developer and graphic skills. 
                        John was super easy to work with and turned things around quickly. I would hire 
                        him again in a second…"
                    </p>
                    <p>&nbsp;</p>
                    <p className="sm:pt-4 md:pt-0 text-lg"><strong>Karen Safran,</strong> Business and Marketing Executive</p>
                </div>
            </div>
        </VisibilitySensor>

        <style jsx>{`
        
        `}</style>
    </div>
);

export default TwoTextSplit;