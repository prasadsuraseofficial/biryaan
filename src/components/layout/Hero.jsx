import { motion } from "framer-motion";
import img from "./../../assets/images/background.png";
import biryaanServant from "./../../assets/images/biryaan-boy.png";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <motion.section
      className={`bg-cover bg-no-repeat h-screen flex items-end justify-around px-5 max-md:flex-col max-md:items-center max-md:justify-between ${styles.heroSection}`}
      style={{
        backgroundImage: `url(${img})`,
        height: "calc(100vh - 72px)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-white max-md:text-center max-md:mt-[10vh] self-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-7xl max-md:text-3xl font-bold mb-4">You will</h1>
        <h1 className="text-7xl max-md:text-3xl font-bold mb-4">
          LOVE TO EAT,
        </h1>
        <h1 className="text-7xl max-md:text-3xl font-bold underline">
          Over and Over Again.
        </h1>
      </motion.div>

      <motion.img
        src={biryaanServant}
        className={`bottom-0 max-md:h-[60vh] h-[80vh] ${styles.heroImg}`}
        alt="biryaanServant"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.section>
  );
}
