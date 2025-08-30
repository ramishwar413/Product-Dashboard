import React from 'react';

const CategoryCard = ({ category, onCategoryClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      onClick={() => onCategoryClick(category)}
    >
      <div className="relative">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
            <p className="text-sm opacity-90">{category.description}</p>
            <p className="text-sm mt-2 font-semibold">{category.count} Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;