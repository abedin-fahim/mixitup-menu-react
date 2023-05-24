import React from 'react';

const Categories = ({ filterItems, allCategories }) => {
  return (
    <div className='btn-container'>
      {allCategories.map((category, index) => {
        return (
          <button
            type='button'
            key={index}
            className='filter-btn'
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
