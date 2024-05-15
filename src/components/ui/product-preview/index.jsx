import { useState } from "react";
// import { products } from "../../../data/products.js";

const ProductPreview = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="w-[95vw] py-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p> */}

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
                className={`mr-2 p-2 max-md:p-1 max-md:text-xs text-sm font-medium rounded ${
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
    </div>
  );
};

export default ProductPreview;
