import React from "react";
import { FaStar } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";

const SingleItem = ({ data }) => {
  return (
    <div className="border-2 border-slate-200 hover:shadow-md hover:shadow-orange-300 transition ease-in-out duration-75 px-4 py-2 rounded-lg  ">
      <img
        className="rounded-xl my-4 h-[200px] w-full object-cover shadow-lg "
        src={data.image}
        alt={data.image}
      />
      <h1 className="font-semibold text-slate-900 text-lg mb-2">
        {data.title.slice(0, 32)}
      </h1>
      <p className=" text-slate-700 ">
        {data.description.slice(0, 80)}{" "}
        <span className="text-blue-900">...</span>{" "}
      </p>
      <p className="my-4 font-bold uppercase text-teal-500 ">{data.category}</p>
      <div className="flex items-center justify-between mt-4">
        <p className="font-semibold text-md text-slate-700 flex items-center gap-1">
          <FaStar className="text-orange-600 " />
          {data.rating.rate}
        </p>
        <p className="font-semibold text-md text-slate-700 flex items-center gap-1 ">
          <FaDollarSign className="text-orange-500" />
          {data.price}
        </p>
      </div>
    </div>
  );
};

export default SingleItem;
