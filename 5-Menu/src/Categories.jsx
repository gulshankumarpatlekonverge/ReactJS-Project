import React from 'react';

const Categories = ({categories, filterItems}) => {
  return (
    <main>
      <div className='btn-container'>
        {
          categories.map((category, index) => {
            return <button type='button' className="filter-btn" key={index} onClick={() => filterItems(category)}>{category}</button>
          }
        )}
      </div>
    </main>
  )
};

export default Categories;
