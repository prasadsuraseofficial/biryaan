import img from "./../../assets/images/background.png";

export default function Hero() {
  return (
    <section
      className="bg-cover bg-no-repeat h-screen flex items-center p-5"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="text-white">
        <h1 className="text-7xl max-md:text-5xl font-bold mb-4">You will</h1>
        <h1 className="text-7xl max-md:text-5xl font-bold mb-4">
          LOVE TO EAT,
        </h1>
        <h1 className="text-7xl max-md:text-5xl font-bold underline">
          Over and Over Again.
        </h1>
      </div>
    </section>
  );
}
