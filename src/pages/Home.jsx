// import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import { ProductPreview } from "../components/ui";
import AboutUs from "../components/ui/about-us";
import { products } from "../constants/products";

function Home() {
  return (
    <div>
      <Hero />

      <div>
        {products &&
          products.map((product, i) => {
            return (
              <div className="flex flex-col items-center gap-5" key={i}>
                <div className="mt-10 bg-blue-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 ">
                  <h1 className="text-4xl max-md:text-2xl font-bold uppercase">
                    {product.sectionHeading}
                  </h1>
                </div>
                <ProductPreview products={product.products} />
              </div>
            );
          })}
      </div>
      <AboutUs />

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
