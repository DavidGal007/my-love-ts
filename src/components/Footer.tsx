import React from 'react'
import { Link } from 'react-router-dom';
import '../style/element.scss';
import Facebook from '../assets/images/facebook.svg'
import Twitter from '../assets/images/twitter.svg'
import LinkedIn from '../assets/images/linked.svg'


const Footer: React.FC = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer footer-wrapper">
                <div className="footer-wrapper__module">
                    <div className="footer-wrapper__inner">
                        <div className="footer-wrapper__element">
                        <h4 className="footer-wrapper__title">Product</h4>
                          <ul className="footer-wrapper__type">
                              <li>
                                  <Link className="footer-wrapper__linke" to="/">Email Row</Link>
                              </li>
                              <li>
                                  <Link className="footer-wrapper__linke" to="/">Free Tools</Link>
                              </li>
                              <li>
                                  <Link className="footer-wrapper__linke" to="/">Agents</Link>
                              </li>
                              <li>
                                  <Link className="footer-wrapper__linke" to="/">Blog</Link>
                              </li>
                          </ul>
                        </div>
                        <div className="footer-wrapper__element">
                        <h4 className="footer-wrapper__title">Resources</h4>
                          <ul className="footer-wrapper__type">
                              <li>
                                  <Link className="footer-wrapper__linke" to="/">Our Agents</Link>
                              </li>
                              <li>
                                  <Link className="footer-wrapper__linke" to="/">Member Stories</Link>
                              </li>
                              <li>
                                  <Link className="footer-wrapper__linke" to="/">Video</Link>
                              </li>
                              <li>
                                  <Link className="footer-wrapper__linke" to="/">Free trial</Link>
                              </li>
                          </ul>
                        </div>
                        <div className="footer-wrapper__element">
                        <h4 className="footer-wrapper__title">Company</h4>
                          <ul className="footer-wrapper__type">
                              <li>
                                  <Link className="footer-wrapper__linke" to="/">Patnerships</Link>
                              </li>
                              <li>
                                  <Link className="footer-wrapper__linke" to="/">Terms of use</Link>
                              </li>
                              <li>
                                  <Link className="footer-wrapper__linke" to="/">Privacy</Link>
                              </li>
                              <li>
                                  <Link className="footer-wrapper__linke" to="/">Sitemap</Link>
                              </li>
                          </ul>
                        </div>
                        <div className="footer-wrapper__element">
                        <h4 className="footer-wrapper__title">Product</h4>
                          <p className="footer__wrapper__des">
                          You’ll find your next Marketing value you prefer.
                          </p>
                          <div className="footer__wrapper__icons">
                              <div className="footer__wrapper__icon">
                                  <img src={Facebook} alt="facebook" />
                              </div>
                              <div className="footer__wrapper__icon">
                                  <img src={Twitter} alt="twitter" />
                              </div>
                              <div className="footer__wrapper__icon">
                                  <img src={LinkedIn} alt="linkedIn" />
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="footer-container-copyRight">
                        Copyright 2021 j-shop.com, All rights reserved.
            </div>
    </footer>
  )
}

export default Footer