import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addItem } from "../features/cart/cartSlice";
import { selectCartItemById } from "../features/cart/selectors";
import { CartItem } from "../features/cart/type";
import { Product } from "../features/product/types";
import "../style/product.scss";
import StarRating from "./Stars/StarRating";

const typeNames = ["2mm", "4mm"];

const Products: React.FC<Product> = ({
  _id,
  images,
  price,
  title,
  Stock,
  numOfReviews,
  ratings,
}) => {
  const [types, setTypes] = React.useState<number>(0);
  const cartItem = useAppSelector(selectCartItemById(_id));
  const dispatch = useAppDispatch();
  const selectHandle = (index: number) => {
    setTypes(index);
  };
  
  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item: CartItem = {
      id: _id,
      title,
      price,
      imageUrl: images,
      size: typeNames[types],
      count: 0,
    };
    dispatch(addItem(item));
  };
  return (
    <div className="products-wrapper__elements">
      <div className="product__img">
        <img className="_ibg" src={`${process.env.REACT_APP_IMG_URL}${images}`} alt={title} />
      </div>
      <h3 className="product__title">{title}</h3>
      <div className="product__block-selector">
        <ul className="product__size-selected">
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
        <div className="rating">
          <StarRating totalStars={5} slectedStars={Number(ratings)} reviewsCount={Number(numOfReviews)}/>
          <p style={{color: '#2C2A2B', paddingTop: 3}}>Stock:{' '}{Stock}</p>
        </div>
      </div>
      <div className="product__block-btn">
        <div className="product__price">{price}$</div>
        <button onClick={onClickAdd} className="product__button">
          Add to Card
          {addedCount > 0 && <span className="ps-badge">{addedCount}</span>}
        </button>
      </div>
    </div>
  );
};

export default Products;
