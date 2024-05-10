import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all">
      <div>
        <p className="text-lightText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          consectetur error, dolores quae ipsa quos enim corporis magni
          obcaecati tempore natus eos, libero ducimus nulla neque eaque maxime
          nam molestias?
        </p>
      </div>

      <div className="flex flex-row justify-center">
        <img className="rounded-full w-1/4" src={props.img} alt="img" />
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title1="Our" title2="Reviews" />

      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img="https://via.placeholder.com/150" />
        <ReviewCard img="https://via.placeholder.com/150" />
        <ReviewCard img="https://via.placeholder.com/150" />
      </div>
    </div>
  );
};

export default Reviews;
