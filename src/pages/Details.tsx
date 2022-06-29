import React from "react";
import "../style/details.scss";
import Alianza from "../assets/images/alianza.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Star from "../components/Star";

const Details: React.FC = () => {
    const Grades = ['1', '2', '3', '4', '5'];
  return (
    <>
    <div className="container">
      <div className="up-pdp card">
        <div className="up-pdp__wrapper">
          <div className="up-pdp__inner">
            <div className="up-pdp__image">
              <img
                className="up-pdp-product__img"
                src={Alianza}
                alt="product-lable"
              />
            </div>
            <div className="up-pdp__details">
              <div className="up-pdp__promotions-pill-label">
                <span className="up-pdp__promotions-lable">
                  hotsale
                </span>
              </div>
              <h3 className="up-pdp__title">
                Whiskas® Dry Adult Dewasa 7+, Cat food Rasa Mackerel
              </h3>
              <div className="ui-pdp">
                <div className="ui-pdp__category">CAT FOOD</div>
                <div className="ui-pdp__star-comp">
                    {
                        Grades.map((grade, i) => (
                            <Star index={i} key={grade} />
                        ))
                    }
                <span className="ui-pdp__reviews">4.9 (2130 reviews)</span>
                </div>
                </div>
                <div className="ui-pdp__description">
                  <h5 className="ui-pdp__desc-title">Description:</h5>
                  <ul className="ui-lists">
                    <li className="ui-list__item">
                      Makanan yang lengkap dan seimbang, dengan 41 nutrisi
                      penting. Mengandung antioksidan (vitamin E dan selenium)
                      untuk sistem kekebalan tubuh yang sehat.
                    </li>
                    <li className="ui-list__item">
                      Mengandung serat untuk memperlancar pencernaan dan
                      meningkatkan kesehatan usus.
                    </li>
                    <li className="ui-list__item">
                      Diperkaya dengan kalsium, fosfor dan vitamin D untuk
                      tulang yang sehat.
                    </li>
                  </ul>
                </div>
                <div className="ui-pdp__img">
                  <div className="ui-pdp__img-lable">
                    <img src="" alt="" />
                  </div>
                  <div className="ui-pdp__img-lable">
                    <img src="" alt="" />
                  </div>
                  <div className="ui-pdp__img-lable">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="ui-pdp__sizes">
                  <ul className="ui-pdp__block">
                    <li className="ui-pdp__chois"></li>
                    <li className="ui-pdp__chois"></li>
                    <li className="ui-pdp__chois"></li>
                    <li className="ui-pdp__chois"></li>
                  </ul>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Details;
