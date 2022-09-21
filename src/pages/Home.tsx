import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import Elements from '../components/Elements'
import Main from '../components/Main'
import ProductMore from '../components/ProductMore'
import Products from '../components/Products'
import debounce from 'lodash.debounce'
import { setCategoryId, setCurrentPage, setSearchValue } from '../features/filter/filterSlice'
import { RootState } from '../app/store'
import {FaSearch} from 'react-icons/fa'
import { fetchProducts } from '../features/product/productSlice'
import { Sort } from '../components/Sort'
import { Categories } from '../components/Categories'
import { Pagination } from '../components/Pagination/Pagination'

const Home: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState<string>('')
  const dispatch = useAppDispatch();
  
  const {searchValue, sort, categoryId, currentPage} = useAppSelector((state: RootState) => state.filter)
  const getGrocery = async () => {
    let search = searchValue;
    const sortBy = sort.sortProperty
    //sovorel replace incluces
    const category = categoryId ? "category=" + categoryId : '';
    dispatch(fetchProducts({page: currentPage, sortBy, category, search }))
  }
  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );
  console.log(currentPage);
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }
  const onChangeCategory = React.useCallback((ctg: string) => {
   dispatch(setCategoryId(ctg))
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  }
  const {items, status} = useAppSelector(state => state.product)
  const product = items.map((obj: any) => <Products key={obj._id} {...obj} />);
 
  React.useEffect(() => {
    getGrocery()
 }, [searchValue, sort.sortProperty, categoryId, currentPage])
  
  return (
    <>
    <main>
      <Main />
      <ProductMore />
      <Elements />
      <section className="products__container">
        <div>
          <div className="products__container__type">
            <div className="products__container__inner">
              <div className="product__search-bar">
                <label className="crdm" htmlFor="">
                  <span className="sr-only">search</span>
                  <span className="search-icon">
                     <FaSearch color="gray"/>
                  </span>
                  <input className="search-input" onChange={onChangeInput} type="text" placeholder="search product..." />
                </label>
                
              </div>
              <div className="products__container__selector">
                <Sort value={sort} /> 
              </div>
            </div>
            <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          </div>
        <div className="products products-wrapper font-base">
          <div className="products-wrapper__inner">
          {status === 'loading' ? 'Loadin...' : product}
          </div>
        </div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage} /> 
        </div>
    </section> 
    </main>
    </>
  )
}

export default Home;