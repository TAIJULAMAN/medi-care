import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../layouts/Button";

const Home = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should occur once
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-5 px-[20px] md:px-[100px] pt-[40px] md:pt-[80px]">
      {/* Left Content Section */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-start items-start space-y-5 text-black"
        data-aos="fade-right"
      >
        <h1
          className="text-4xl md:text-5xl font-bold leading-snug tracking-wide"
          data-aos="zoom-in"
        >
          Your Health, Our Priority: Quality Care You Can Trust
        </h1>
        <p
          className="text-lg md:text-xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We provide comprehensive healthcare solutions to empower you and your
          loved ones. From preventive care to advanced treatments, we are
          committed to ensuring your well-being and vibrant life.
        </p>
        <div
          className="flex justify-start"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Button title="Explore Services" />
        </div>
      </div>

      {/* Right Image Section */}
      <div
        className="w-full md:w-1/2 flex justify-center items-center"
        data-aos="fade-left"
      >
        <img
          src="/hospital1.png"
          alt="Hospital"
          className="w-full h-full object-cover max-h-[350px]"
          data-aos="zoom-in"
        />
      </div>
    </div>
  );
};

export default Home;
