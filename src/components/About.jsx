import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center md:px-[100px] px-[20px] pt-[40px] md:pt-[80px] gap-10">
      {/* Left Content Section */}
      <div className="w-full lg:w-3/5 space-y-6" data-aos="fade-right">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center lg:text-start">
          Discover Our Mission and Values
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify lg:text-start">
          At our organization, we are dedicated to making a positive impact in
          the lives of individuals and communities. Our mission is to provide
          reliable, innovative, and high-quality services that foster growth,
          health, and well-being.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-justify lg:text-start">
          With a passionate team and a commitment to excellence, we continually
          strive to bring solutions that meet your needs and exceed your
          expectations. We believe in transparency, trust, and creating a
          collaborative environment where everyone thrives.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-justify lg:text-start">
          Join us on our journey as we work together to achieve greater success,
          empower individuals, and shape a better future for everyone.
        </p>
      </div>

      {/* Right Image Section */}
      <div
        className="w-full lg:w-2/5 flex justify-center items-center"
        data-aos="fade-left"
      >
        <img
          className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
          src="/about2.png"
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default About;
