import Link from 'next/link';
import Image from 'next/image';
import '../styles/styles.css';
import { Component } from 'react';

/* Component Layout */
class ThreeColumnIcons extends Component {
  state = {
    imgIsVisible: false
  }

  render() {
    return (
      
      <div className="three-column-icons bg-dark-background sm:block md:flex lg:block text-white w-full sm:text-center">
        <Link href={this.props.Block1Link}>
          <div className={this.props.Block1ClassName}>
            <div className="bg-cool-green three-column-icons__icon w-full sm:h-auto md:h-full rounded-lg pb-8 margin-0-auto opacity-100 border-8 border-cool-green--reduced-opacity">                          
              <Image width={300} height={200} alt="Pueblo Unido website mockups on phone, tablet, and desktop" onClick={this.handleOpenModal4} className="opacity-100 px-4 py-6" src={"/../static/img/jpg/" + this.props.Block1FileName + ".jpg"} loading="lazy" />              
              <h3 className="text-2xl sm:opacity-100 md:opacity-0 sm:pb-0">{this.props.Block1Copy}</h3>
            </div>
          </div>
        </Link>    
        <Link href={this.props.Block2Link}>
          <div className={this.props.Block2ClassName}>
            <div className="bg-cool-blue three-column-icons__icon w-full sm:h-auto md:h-full rounded-lg margin-0-auto opacity-100 border-8 border-cool-blue--reduced-opacity">                          
              <Image width={300} height={200} alt="Pueblo Unido website mockups on phone, tablet, and desktop" className="opacity-100 px-4 py-6" src={"/../static/img/jpg/" + this.props.Block2FileName + ".jpg"} loading="lazy" />              
              <h3 className="text-2xl sm:opacity-100 md:opacity-0 sm:pb-8">{this.props.Block2Copy}</h3>
            </div>
          </div>
        </Link>
              
        <Link href={this.props.Block3Link}>
          <div className={this.props.Block3ClassName}>
            <div className="bg-cool-purple three-column-icons__icon w-full sm:h-auto md:h-full rounded-lg pb-8 margin-0-auto opacity-100 border-8 border-cool-purple--reduced-opacity">                          
              <Image width={300} height={200} alt="Pueblo Unido website mockups on phone, tablet, and desktop" className="opacity-100 px-4 py-6" src={"/../static/img/jpg/" + this.props.Block3FileName + ".jpg"} loading="lazy" />              
              <h3 className="text-2xl sm:opacity-100 md:opacity-0 sm:pb-0">{this.props.Block3Copy}</h3>
            </div>
          </div>
        </Link>        
      </div>
    )
  }
}

export default ThreeColumnIcons;