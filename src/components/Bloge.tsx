import React from "react";
import "../style/element.scss";
import Blog1 from "../assets/images/blog1.jpg";
import Blog2 from "../assets/images/blog2.jpg";
import Blog3 from "../assets/images/blog3.jpg";
import { Link } from "react-router-dom";

const Bloge: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="blogs bloge-wrapper">
          <div className="bloge-wrapper__attr">
            <div className="bloge-wrapper__title font-base">Our Blogs</div>
          </div>
          <div className="bloge-wrapper__inner">
            <div className="bloge-wrapper__elements">
              <Link to="/blog">
                <div className="bloge-wrapper__article">
                  <div className="bloge-wrapper__image">
                    <img src={Blog1} alt="blog-img" />
                  </div>
                  <div className="bloge-wrapper__subtitle">For Beauty</div>
                  <div className="bloge-wrapper__description">
                    Offending belonging promotion provision an be oh consulted
                    ourselves it.
                  </div>
                </div>
              </Link>
            </div>
            <div className="bloge-wrapper__elements">
              <Link to="/blog">
                <div className="bloge-wrapper__article">
                  <div className="bloge-wrapper__image">
                    <img src={Blog2} alt="blog-img" />
                  </div>
                  <div className="bloge-wrapper__subtitle">Product Quality</div>
                  <div className="bloge-wrapper__description">
                    Blessing welcomed ladyship she met humoured sir breeding
                    her. Six curiosity day necessary.
                  </div>
                </div>
              </Link>
            </div>
            <div className="bloge-wrapper__elements">
              <Link to="/blog">
                <div className="bloge-wrapper__article">
                  <div className="bloge-wrapper__image">
                    <img src={Blog3} alt="blog-img" />
                  </div>
                  <div className="bloge-wrapper__subtitle">For Comfort</div>
                  <div className="bloge-wrapper__description">
                    Warmly little before cousin sussex entire men set. Blessing
                    it ladyship on sensible.
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bloge;
