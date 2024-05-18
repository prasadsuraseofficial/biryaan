import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/layout/Hero";
import { ProductPreview } from "../components/ui";
import AboutUs from "../components/ui/about-us";
import { products } from "../constants/products";

function Home() {
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll position
      const scrollPosition = window.scrollY;

      // Set animateCards based on scroll position
      setAnimateCards(scrollPosition > 100);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Hero />

      <div>
        {products &&
          products.map((product, i) => {
            return (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={animateCards ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="mt-10 bg-blue-100 text-[#76173c] font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 ">
                  <h1 className="text-4xl max-md:text-2xl font-bold uppercase">
                    {product.sectionHeading}
                  </h1>
                </div>
                <ProductPreview products={product.products} />
              </motion.div>
            );
          })}
      </div>

      <AboutUs />
    </div>
  );
}

export default Home;
