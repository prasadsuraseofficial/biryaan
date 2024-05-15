import { useState } from "react";
// import { products } from "../../../data/products.js";

const ProductPreview = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="p-5 pt-0 md:flex justify-center gap-10">
      {/* <div className=""> */}
      <div className="w-1/2 max-md:w-full max-md:mb-5">
        <img
          src={selectedProduct.image}
          alt="product img"
          className="rounded-lg"
        />
      </div>
      <div className="w-1/2 max-md:w-full">
        <div className="flex mb-5">
          {products.map((product) => (
            <button
              key={product.title}
              className={`font-bold text-sm mr-2 p-2 max-md:p-1 rounded-lg ${
                selectedProduct.title === product.title
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleProductClick(product)}
            >
              {product.title}
            </button>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">
            {selectedProduct.title} Details
          </h2>
          <p>{selectedProduct.description}</p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProductPreview;
