import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="w-[100vw]" style={{ marginTop: "72px" }}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
