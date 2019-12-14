import Button from './Button';
import '../styles/styles.css';

/* Component Layout */ 
const TwoTextSplit = () => (
    <div className="two-text-split bg-dark-background lines-background text-white px-12 w-full h-full">
        <div className="left inline">
            <div className="left-quote w-2/5 text-left inline-block">
                <p className="text-base">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, but also the 
                    leap into electronic typesetting, remaining essentially unchanged. It was 
                    popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum."
                </p>
                <p><strong>Person Name,</strong> Person Title</p>
            </div>
            <div className="w-4/5 inline-block" />            
        </div>
        <br />
        <br />
        <div className="right inline">
            <div className="w-4/5 inline-block" />
            <div className="right-quote w-2/5 text-right inline-block">
                <p className="text-base">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, but also the 
                    leap into electronic typesetting, remaining essentially unchanged. It was 
                    popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software 
                    like Aldus PageMaker including versions of Lorem Ipsum."
                </p>
                <p><strong>Person Name,</strong> Person Title</p>
            </div>
        </div>

        <br />
        <br />
        <Button />

        <style jsx>{`
        
        `}</style>
    </div>
);

export default TwoTextSplit;