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
                <h1 className="text-4xl max-md:text-2xl font-bold mt-5 uppercase underline">
                  {product.sectionHeading}
                </h1>
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
