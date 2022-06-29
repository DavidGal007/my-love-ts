import React from "react";
import Pulsera from "../assets/images/pulsera.png";
import Ring from "../assets/images/ring.png";

const ProductMore: React.FC = () => {
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="ring ring-container">
            <div className="ring-container__inner">
              <div className="ring-container__image">
                <img
                  className="ring-container__img _ibg"
                  src={Pulsera}
                  alt="Product"
                />
              </div>
              <div className="ring-container__type">
                <div className="ring-container__title font-base">
                  Gold Woven Chain Bracelet in Black
                </div>
                <p className="ring-container__description">
                  This bracelet features a 5MM Stainless Steel chain with Nylon
                  cord braiding. Each bracelet includes a polishing pad and a
                  cotton jewelry pouch. Proudly made by hand in Atlanta, GA.
                </p>
                <div className="ring-container__size"></div>
                <div className="ring-container__btn">
                  <button className="container__btn">Add to cart</button>
                  <span className="container__price">549.29$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="variacions variacions-container">
            <div className="variacions-container__wrapper">
              <div className="variacions-container__type">
                <div className="variacions-container__title font-base">
                  Gold Black Coral Ring
                </div>
                <p className="variacions-container__description">
                  A 14K yellow gold variacions Two Hawaiian Black Coral inlaid
                  strips, 14.5x2mm Ring sizes 4-8 Contact us for additional
                  variacions sizes To our valued International Customers, an
                  extra CITES charge will be added to your order.
                </p>
                <div className="variacions-container__size"></div>
                <div className="variacions-container__btn">
                  <button className="container__btn">Add to cart</button>
                  <span className="container__price">320.99$</span>
                </div>
              </div>
              <div className="variacions-container__image">
                <img
                  className="variacions-container__img _ibg"
                  src={Ring}
                  alt="Product"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProductMore;
