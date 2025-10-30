import React, { useContext } from "react";
import { plans } from "../assets/assets"; 
import { AppContext } from "../context/AppContext";

const BuyCredit = () => {

  const {user} = useContext(AppContext);

  return (
    <div>
      <h1 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 md:py-6">
        Choose Your Plan
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        Select the perfect plan for your image generation needs.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 pt-20 pb-22">
        {plans.map((plan, index) => (
          <div
            key={plan.id}
            className={`w-72 text-center p-6 rounded-lg border transition-all ${
              index === 1
                ? "bg-indigo-500 text-white border-gray-500/30 relative"
                : "bg-white text-gray-800/80 border-gray-200"
            }`}
          >
            {/* "Most Popular" badge */}
            {index === 1 && (
              <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-[#8789FB] rounded-full">
                Most Popular
              </p>
            )}

            <p className="font-semibold pt-2">{plan.id}</p>
            <h1 className="text-3xl font-semibold">
              ₹{plan.price}
              <span className={`text-sm font-normal ${index !== 1 ? "text-gray-500" : ""}`}>
                /{plan.credits} Credits
              </span>
            </h1>
            <p className={`mt-2 text-sm ${index === 1 ? "text-gray-200" : "text-gray-500"}`}>
              {plan.desc}
            </p>

            <button
              type="button"
              className={`text-sm w-full py-2 rounded font-medium mt-7 transition-all ${
                index === 1
                  ? "bg-white text-indigo-500 hover:bg-gray-200"
                  : "bg-indigo-500 text-white hover:bg-indigo-600"
              }`}
            >{user ? 'Purchase' : 'Get Started' }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
