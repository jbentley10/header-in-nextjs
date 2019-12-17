import Button from './Button';
import '../styles/styles.css';

/* Component Layout */ 
const TwoTextSplit = () => (
    <div className="two-text-split bg-dark-background lines-background text-white px-12 w-full h-full">
        <div className="left inline">
            <div className="left-quote w-1/2 text-left inline-block">
            <p className="text-base">"My website was slow, so people left before the pages 
                could load … I reached out to John and he was wonderful! He not only fixed the 
                problems, but he also empowered me by teaching some web developer and graphic skills. 
                John was super easy to work with and turned things around quickly. I would hire 
                him again in a second…"
                </p>
                <p><strong>Karen Safran,</strong> Business and Marketing Executive</p>
            </div>
            <div className="w-2/5 inline-block" />            
        </div>
        <br />
        <br />
        <div className="right inline">
            <div className="w-2/5 inline-block" />
            <div className="right-quote w-1/2 text-right inline-block mb-12">
                <p className="text-base">"He is the rare combination of being smart developer, 
                adaptive UX designer and insightful marketing analyst all at the same time. 
                During our time together, he increased search visibility to our website by 25% 
                using Moz and Google Analytics. John is a tremendous asset to any team and has a 
                bright future in Martech."
                </p>
                <p><strong>Garrett Gillas,</strong> Marketing Technologist</p>
            </div>
        </div>
        <Button />

        <style jsx>{`
        
        `}</style>
    </div>
);

export default TwoTextSplit;