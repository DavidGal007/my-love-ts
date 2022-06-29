import React from "react";
import "../style/cart.scss";
import ItemImg from "../assets/images/product.png";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { CartEmpty } from "../components/CardEmpty";
import { clearItems } from "../features/cart/cartSlice";
import CardItem from "../components/CardItem";

const Card: React.FC = () => {
  const navigate = useNavigate();
  const { totalPrice, items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const isMount = React.useRef(false);
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );
  React.useEffect(() => {
    if (isMount.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMount.current = true;
  }, [items]);
  const RemoveItemsToCart = () => {
    if (window.confirm("Confirm")) {
      dispatch(clearItems());
    }
  };
  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <div className="card">
      <div className="card__index">
        <div className="card__tabs">
          <ul className="card__lists">
            <li className="card__list">Cart</li>
            <li onClick={RemoveItemsToCart} className="card__trash">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5H4.16667H17.5"
                  stroke="#B6B6B6"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                  stroke="#B6B6B6"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.33337 9.16667V14.1667"
                  stroke="#B6B6B6"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6666 9.16667V14.1667"
                  stroke="#B6B6B6"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Remove All</span>
            </li>
          </ul>
        </div>
        <div className="item-wrapper">
          {items.map((item: any) => (
            <CardItem key={item.id} {...item} />
          ))}
        </div>
        <div className="summary">
          <div className="summary__inner">
            <div className="summary__count">
              <h3 className="text summary__length">
                Items: <b>{totalCount}</b>
              </h3>
              <Link className="same-style summary__goback-btn" to="/">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="#D3D3D3"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Go back</span>
              </Link>
            </div>
            <div className="summary__total">
              <div className="fs-mut">
              <h3 className="text summary__tag">
                Total: <b>{totalPrice} $</b>
              </h3>
              <Link to="/payment" className="same-style summary__pay-btn">
                Pay now
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
