import React from 'react'
import Anillos from '../assets/images/image1.jpg'
import Cadenas from '../assets/images/image2.jpg'
import '../style/element.scss';

const Elements: React.FC = () => {
  return (
      <React.Fragment>
    <section>
        <div className="container">
            <div className="element elment-wrapper">
                <div className="elment-wrapper__block">
                <div className="elment-wrapper__image">
                <img src={Anillos} className="_ibg" alt="product-img" />
                </div>
                <div className="elment-wrapper__content">
                    <h2 className="elment-wrapper__title font-base">
                    J-Shop's best Collections
                    </h2>
                    <h4 className="h4 elment-wrapper__subtitle">Comfort</h4>
                    <p className="elment-wrapper__description">
                    We will reach out to you for the current cost of this permit. Please contact us for more information. Maui Divers Jewelry offers extended sizing which may be subject to an additional cost.
                    Any subsequent resizes after purchase will incur an additional charge. Please note some styles cannot be resized due to their design.
                    </p>
                </div>
            </div>
            </div>
        </div>
    </section>
    <section>
    <div className="container">
        <div className="advantage advantage-wrapper">
            <div className="advantage-wrapper__inner">
            <div className="advantage-wrapper__content">
                <h2 className="advantage-wrapper__title font-base">
                100% Gold
                </h2>
                <h4 className="h4 advantage-wrapper__subtitle">Advantage</h4>
                <p className="advantage-wrapper__description">
                Gold chains were a sign of service to the supreme beings of a particular religion in the past. Nowadays, they are symbols of wealth and class. Rap artists were most likely
                the ones who brought the custom of wearing gold chains to modern men's everyday life. There are a few reasons why do men wear gold chains.
                </p>
            </div>
            <div className="advantage-wrapper__image">
            <img width="485px" src={Cadenas} className="_ibg" alt="product-img" />
            </div>
        </div>
        </div>
    </div>
</section>
</React.Fragment>
  )
}

export default Elements;