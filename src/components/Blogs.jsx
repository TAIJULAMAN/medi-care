import React from "react";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";

const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center md:px-[100px] px-[20px] pt-[40px] md:pt-[80px]">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className="my-10">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard
            img="/blog1.jpg"
            headlines="Unraveling the Mysteries of Sleep"
          />
          <BlogCard img="/blog2.jpg" headlines="The Heart-Healthy Diet" />
          <BlogCard
            img="/blog3.jpg"
            headlines="Understanding Pediatric Vaccinations"
          />
          <BlogCard img="/blog4.jpg" headlines="Navigating Mental Health" />
          <BlogCard
            img="/blog5.jpg"
            headlines="The Importance of Regular Exercise"
          />
          <BlogCard img="/blog6.jpg" headlines="Skin Health 101" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
