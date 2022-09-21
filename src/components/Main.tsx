import React, { useState, useEffect } from "react";
import Ring from "../assets/images/gold-ring.png";
import Alianze from "../assets/images/gold-alianze.png";
import Facebook from "../assets/images/facebook.svg";
import Twitter from "../assets/images/twitter.svg";
import LinkedIn from "../assets/images/linked.svg";
import "../style/main.scss";

const Main: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const fullHeight = document.body.scrollHeight;
    const innerHeight = window.innerHeight;
    const position = (window.pageYOffset * 100) / (fullHeight - innerHeight);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="container">
        <div className="jewelery jewelery-container ">
          <div className="jewelery-container__inner">
            <div className="jewelery-container__image">
              <img
                className="jewelery-container__img _ibg"
                src={Ring}
                alt="Ring"
              />
            </div>
            <h1 className="jewelery-container__content font-base">
              Jewelery tells a great story
            </h1>
            <div className="jewelery-container__type">
              <article className="jewelery-container__article">
                <h4 className="jewelery-container__title font-base">Gold</h4>
                <p className="jewelery-container__description">
                  Her provision acuteness had two why intention.
                </p>
              </article>
              <article className="jewelery-container__article">
                <h4 className="jewelery-container__title font-base">Silver</h4>
                <p className="jewelery-container__description">
                  Her provision acuteness had two why intention.
                </p>
              </article>
            </div>
          </div>
          <div className="alianze alianze-container">
            <div className="alianze-container__inner">
              <h1 className="alianze-container__title font-base">Our Story</h1>
              <p className="alianze-container__description">
                modern jewelry is made of gold, silver, or platinum, often with
                precious or semiprecious stones, it evolved from shells, animal
                teeth, and other items used as body decoration in prehistoric
                times.
              </p>
              <div className="alianze-container__image">
                <img
                  className="alianze-container__img _ibg"
                  src={Alianze}
                  alt="Alianze"
                />
              </div>
              <div className="alianze-container__block">
                <div className="alianze-container__advanced">
                  <div className="alianze-container__modal">18kts</div>
                  <p className="alianze-container__subtitle">
                    Garantina permanente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jewelery-content">
          <div className="jewelery-content__fixed">
            <div className="jewelery-content__icons">
              <div className="jewelery-content__icon">
                <a target='_blank' href="https://www.instagram.com/d_a__ve/">
                  <img src={Facebook} alt="facebook" />
                </a>
              </div>
              <div className="jewelery-content__icon">
              <a target='_blank' href="https://www.instagram.com/d_a__ve/">
                  <img src={Twitter} alt="twitter" />
                </a>
              </div>
              <div className="jewelery-content__icon">
              <a target='_blank' href="https://www.instagram.com/d_a__ve/">
                  <img src={LinkedIn} alt="linkedIn" />
                </a>
              </div>
            </div>
            <div className="jewelery-range">
              <div className="jewelery-range__scroll">
                <input
                  value={scrollPosition}
                  type="range"
                  readOnly
                  name="rangeScroll"
                />
                <div className="jewelery-range__dots-too">
                  {Math.round(scrollPosition)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
