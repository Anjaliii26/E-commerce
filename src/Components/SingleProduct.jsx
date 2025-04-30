import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/productcontext";
import { PageNavigation } from "./PageNavigation";
import MyImage from './MyImage';
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { AddToCart } from "./AddToCart";

export const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, singleProduct, isSingleLoading } = useGlobalContext();

  const {
    id: alias,
    name,
    image,
    price,
    description,
    category,
    company,
    colors,
    brand,
    stock,
    stars,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(id);
  }, [id]);

  if (isSingleLoading) {
    return <div className="text-center text-xl font-medium">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <PageNavigation title={name} />
      <div className="flex flex-col md:flex-row gap-10 mt-8">
        <div className="md:w-1/2">
        <MyImage image={image} />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="text-yellow-500">⭐ {stars} ({reviews} reviews)</p>
          <p>MRP: <del className="text-gray-500">₹{price + 2500}</del></p>
          <p className="font-bold text-red-500">
            Deal of the day: <span className="text-red-500 font-bold">₹{price}</span>
          </p>
          <p className="text-gray-700">{description}</p>
          <div className="flex justify-between items-center text-center mt-6 gap-4">
            <div className="flex flex-col items-center w-1/4">
              <TbTruckDelivery size={24} />
              <p className="text-sm mt-1 whitespace-nowrap">Free Delivery</p>
            </div>
            <div className="flex flex-col items-center w-1/4">
              <TbReplace size={24} />
              <p className="text-sm mt-1 whitespace-nowrap">30 Days Replacement</p>
            </div>
            <div className="flex flex-col items-center w-1/4">
              <TbTruckDelivery size={24} />
              <p className="text-sm mt-1 whitespace-nowrap">Delivered Safely</p>
            </div>
            <div className="flex flex-col items-center w-1/4">
              <MdSecurity size={24} />
              <p className="text-sm mt-1 whitespace-nowrap">2 Year Warranty</p>
            </div>
          </div>
          <div>
            <p className="text-gray-700">Available: <span className="text-black">{stock > 0 ? "In Stock" : "Out of Stock"}</span></p>
            <p className="text-gray-700">Company Name: <span className="text-black">{company}</span></p>
          </div>
          <hr></hr>
          {stock > 0 && <AddToCart product={singleProduct} />}
          <div className="flex mt-4">
           

          </div>

        </div>
      </div>
    </div>
  );
};
