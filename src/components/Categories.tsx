import React from 'react';
import { api } from '../app/instance';

type CategoriesProps = {
  value: string;
  onChangeCategory: (ctg: string) => void;
};

export const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
    const [categories, setCategories] = React.useState([])
    React.useEffect(() => {
       const fetchCategory = async () => {
        await api.get('/category').then((res) => {
          setCategories(res.data)
       })
       }
       fetchCategory()
    },[])
  return (
    <div className="categories">
      <div className="category_scroll-y">
      <ul className="cate-item">
        <li onClick={() => onChangeCategory('')} className="cate-items">All</li>

        {categories.map((categoryName: any, i) => (
          
          <li key={i} onClick={() => onChangeCategory(categoryName.name)} className={`cate-items ${value === categoryName.name ? 'active' : ''}`}>
            {categoryName.name}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
});