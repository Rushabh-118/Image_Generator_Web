import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const onsubmitHandler = async (e) => {
    
  }

  return (
    <form onSubmit={onsubmitHandler} className="flex flex-col min-h-[90vh] justify-center items-center">
      <div>
        <div className="relative">
          <img src={image} alt="" className="max-w-sm rounded" />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? "w-full transition-all duration-[10s]" : "w-0"}`} />
        </div>
        <p className={!loading ? 'hidden' : ''}>Loading.....!!</p>
      </div>

      {!isImageLoading && <div className="flex w-full max-w-xl bg-neutral-500 text-white rounded-full p-0.5 mt-10 text-sm">
        <input onChange={e => setInput(e.target.value)} value={input} type="text" placeholder="Describe what U Want to generate" className=" flex-1 text-white font-bold bg-transparent outline-none ml-8 max-sm:w-20" />
        <button type="submit" className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white">Generate</button>
      </div>
      }
      
      {isImageLoading && 
      <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
        <p onClick={()=> setIsImageLoading(false)} className=" bg-transparent border border-zinc-800 text-black px-8 py-3 rounded-full cursor-pointer">Generate Another</p>
        <a href={image} download className=" bg-zinc-800 px-10 py-3 rounded-full cursor-pointer">Download</a>
      </div>
      }

    </form>
  );
};

export default Result;
