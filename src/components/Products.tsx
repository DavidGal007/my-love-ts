import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import ProductImg from "../assets/images/product.png";
import { addItem } from "../features/cart/cartSlice";
import { selectCartItemById } from "../features/cart/selectors";
import { CartItem } from "../features/cart/type";
import { Product } from "../features/product/types";
import "../style/product.scss";

const typeNames = ["2mm", "4mm"];
const heighNames = ["20cm", "28cm", "35cm"];

const Products: React.FC<Product> = ({
  category,
  description,
  _id,
  images,
  price,
  title,
  Stock,
  likes,
  numOfReviews,
  ratings,
}) => {
  const [types, setTypes] = React.useState(0);
  const [heighs, setHeighs] = React.useState(0);
  const cartItem = useAppSelector(selectCartItemById(_id))
  
  const dispatch = useAppDispatch()
  const selectHandle = (index: number) => {
    setTypes(index);
  };
  const HeighHandle = (index: number) => {
    setHeighs(index);
  };
  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item: CartItem = {
      id: _id,
      title,
      price,
      imageUrl: '',
      size: typeNames[0],
      count: 0
    }
    dispatch(addItem(item))
  }
  return (
    <div className="products-wrapper__elements">
      <Link className="product__img _ibg" to="/product/id">
        <img width={250} src={ProductImg} alt="product" />
      </Link>
      <h3 className="product__title">{title}</h3>
      <div className="product__block-selector">
        <ul>
          {typeNames.map((value, i) => (
            <li
              key={i}
              className={types === i ? "active" : undefined}
              onClick={() => selectHandle(i)}
            >
              {value}
            </li>
          ))}
        </ul>
        <ul>
          <li className="active">20cm</li>
          <li>28cm</li>
          <li>35cm</li>
        </ul>
      </div>
      <div className="product__block-btn">
        <div className="product__price">{price}$</div>
        <button onClick={onClickAdd} className="product__button">
          <div className="ps-plus">
          <svg width="12" className="plus-icon" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#2C2A2B"/>
</svg>
          </div>
          Add to Card
          { addedCount > 0 && <span className="ps-badge">{addedCount}</span>
            
          }
          </button>
      </div>
    </div>
    
  );
};

export default Products;
