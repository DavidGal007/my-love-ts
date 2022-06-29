import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/J-Shop.png";
import Search from "../assets/images/search.svg";
import Card from "../assets/images/card.svg";
import User from "../assets/images/user.svg";
import Avatar from "../assets/images/davo.jpg";
import { useAppSelector } from "../app/hooks";
import { selectCart, selectCartItemById } from "../features/cart/selectors";

const Header: React.FC = () => {
  const [burger, setBurger] = useState(false);
  const { items } = useAppSelector((state) => state.cart);
  const cartCount = items.length ?? 0;
  const ToggleBuger = () => {
    setBurger(!burger);
  };

  return (
    <header>
      <div className="header__wrapper">
        <nav className="navigate">
          <div className="container__header-nav header-nav container">
            <div className="header-nav__logo">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            <ul className="header-nav__lists">
              <li className="header-nav__list">
                <Link className="header-nav__link" to="/">
                  Categories
                </Link>
              </li>
              <li className="header-nav__list">
                <Link className="header-nav__link" to="/about">
                  About
                </Link>
              </li>
              <li className="header-nav__list">
                <Link className="header-nav__link" to="/">
                  Shop
                </Link>
              </li>
              <li className="header-nav__list">
                <Link className="header-nav__link" to="/">
                  Content
                </Link>
              </li>
            </ul>
            <div className="header-nav__interface">
              <div className="header-nav__icons">
                <img className="icon" src={Search} alt="search-icon" />
              </div>
              <div className="header-nav__icons badge">
                <Link to="/cart">
                  <img className="icon" src={Card} alt="card-icon" />
                  <span className="badge-card">{cartCount}</span>
                </Link>
              </div>
              <div className="header-nav__icons">
                <img className="icon" src={User} alt="user-icon" />
              </div>
            </div>
            <div
              onClick={ToggleBuger}
              className="header-nav__icons-burger icons-burger"
            >
              <span className="icons-burger__line"></span>
            </div>
          </div>
        </nav>
      </div>
      <aside className={`header-nav__block ${burger ? "burger-mobail" : ""}`}>
        <div className="burger-wrapper">
          <p className="paragraph__dashboard">Your Bag is empty.</p>
          {/* <div className="header-mobail">
            <div className="header-mobail__avatar">
              <div className="header-mobail__user-img">
                <img className="avatar _ibg" src={Avatar} alt="avatar" />
              </div>
              <div className="header-mobail__title">
                <span className="header-mobail__user-subtitle">Good Day!</span>
                <div className="header-mobail__user-name">G. David</div>
              </div>
            </div>
          </div> */}
        
          <div className="config-logout">
            <ul className="config-navbar__lists">
              <li className="config-navbar__list">
                <Link className="config-navbar__link" to="/">
                  Bag
                </Link>
              </li>
              <li className="config-navbar__list">
                <Link className="config-navbar__link" to="/">
                  Favorites
                </Link>
              </li>
              <li className="config-navbar__list">
                <Link className="config-navbar__link" to="/">
                  Orders
                </Link>
              </li>
              <li className="config-navbar__list">
                <Link className="config-navbar__link" to="/">
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;
