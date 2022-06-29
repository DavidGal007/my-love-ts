import React from 'react'
import { useAppSelector } from '../app/hooks'
import Bloge from '../components/Bloge'
import Elements from '../components/Elements'
import Footer from '../components/Footer'
import Main from '../components/Main'
import ProductMore from '../components/ProductMore'
import Products from '../components/Products'

const Home: React.FC = () => {
  const {items, status} = useAppSelector(state => state.product)
  const product = items.map((obj: any) => <Products key={obj._id} {...obj} />);
  return (
    <>
    <main>
      <Main />
      <ProductMore />
      <Elements />
      <section className="products__container">
        <div className="container">
          <div className="products__container__type">
            <div className="products__container__inner">
              <h4 className="products__container__title font-base">Shop</h4>
              <div className="products__container__selector">
                  <select name="selectId">
                      <option value="1">All</option>
                      <option value="2">Rings</option>
                      <option value="3">Alianzs</option>
                  </select>
              </div>
            </div>
          </div>
        <div className="products products-wrapper font-base">
          <div className="products-wrapper__inner">
          {status === 'loading' ? 'Loadin...' : product}
          </div>
        </div>
        </div>
    </section> 
      <Bloge />
      <Footer />
    </main>
    </>
  )
}

export default Home;