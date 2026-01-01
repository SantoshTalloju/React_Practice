import Header from "./Header";
import Footer from "../../components/Myntra/Footer";

const Bag = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bag-page">
          <div className="bag-items-container"></div>
          <div className="bag-summary"></div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Bag;
