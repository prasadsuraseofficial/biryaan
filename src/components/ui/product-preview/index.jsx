import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProductPreview = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [animateOnScroll, setAnimateOnScroll] = useState(false);
  const [tabAnimation, setTabAnimation] = useState("hidden");

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setTabAnimation("visible");
  };

  const handleTabAnimationComplete = () => {
    setTabAnimation("hidden");
  };

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll position
      const scrollPosition = window.scrollY;

      // Set animateOnScroll based on scroll position
      setAnimateOnScroll(scrollPosition > 100);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[95vw] py-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5 pt-0 md:flex justify-center gap-10">
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
            <motion.h2
              className="text-xl font-bold mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {selectedProduct.title} Details
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {selectedProduct.description}
            </motion.p>

            {selectedProduct && selectedProduct.price && (
              <>
                <motion.h4
                  className="text-lg font-bold mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Price Chart:
                </motion.h4>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.6 },
                  }}
                  exit={{ opacity: 0 }}
                  onAnimationComplete={handleTabAnimationComplete}
                >
                  <PriceTable
                    selectedProduct={selectedProduct}
                    animateOnScroll={animateOnScroll}
                    tabAnimation={tabAnimation}
                  />
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceTable = ({ selectedProduct, animateOnScroll, tabAnimation }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <motion.div
      className={`relative overflow-x-auto shadow-md sm:rounded-lg ${
        animateOnScroll ? "animate" : ""
      }`}
      initial={tabAnimation}
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <motion.table
        className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        initial={tabAnimation}
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Serving Size
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <motion.tbody
          initial={tabAnimation}
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {selectedProduct?.price &&
            Object.entries(selectedProduct.price).map(([size, price]) => (
              <motion.tr
                key={size}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {capitalizeFirstLetter(size)}
                </td>
                <td className="px-6 py-4">₹{price}</td>
              </motion.tr>
            ))}
        </motion.tbody>
      </motion.table>
    </motion.div>
  );
};

export default ProductPreview;
