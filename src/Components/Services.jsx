import React from 'react'
import { FaTruckFast, FaMoneyBillWheat } from "react-icons/fa6"
import { RiSecurePaymentFill } from "react-icons/ri"
import { MdOutlineSecurity } from "react-icons/md"

export const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-10 py-12 justify-center">
      {/* Card 1 */}
      <div className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
        <FaTruckFast className="text-4xl text-blue-600 mb-3" />
        <p className="text-lg font-semibold text-gray-800">Super Fast and Free Delivery</p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center gap-6">
        <div className="flex p-6 gap-6 items-center justify-center bg-white shadow-lg rounded-xl hover:shadow-xl transition w-full">
          <MdOutlineSecurity className="text-4xl text-green-600 mb-3 justify-center items-center" />
          <p className="text-lg font-semibold text-gray-800">Non-contact Shipping</p>
        </div>
        <div className="flex gap-6 items-center p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition w-full">
          <FaMoneyBillWheat className="text-4xl text-yellow-600 mb-3" />
          <p className="text-lg font-semibold text-gray-800">Money-back Guaranteed</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col justify-center items-center text-center p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
        <RiSecurePaymentFill className="text-4xl text-purple-600 mb-3" />
        <p className="text-lg font-semibold text-gray-800">Super Secure Payment Gateway</p>
      </div>
    </div>
  )
}
