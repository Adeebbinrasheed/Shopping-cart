import React, { useContext } from "react";
import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart}=useContext(ShopContext)
  return (
    <section >
      <div className="flex flex-col gap-14 xl:flex-row lg:gap-16">
        <div className="flex gap-x-3">
          <div className="flex flex-col gap-2 flex-wrap">
            <img src={product_rt_1} alt="" className="max-h-[99px]" />
            <img src={product_rt_2} alt="" className="max-h-[99px]" />
            <img src={product_rt_3} alt="" className="max-h-[99px]" />
            <img src={product_rt_4} alt="" className="max-h-[99px]" />
          </div>
          <div>
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="font-bold text-3xl">{product.name}</h3>
          <div className="flex gap-x-2 items-center text-xl text-orange-500">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p className="text-sm text-black">(111)</p>
          </div>
          <div className="flex gap-x-3 my-2 items-center font-bold text-xl">
            <div className="text-2xl">${product.new_price}</div>
            <div className="line-through">{product.old_price}</div>
          </div>
          <div className="">
            <h4 className="font-bold">select size:</h4>
            <div className="flex gap-3 my-3">
              <div className="ring-2 ring-slate-900 h-10 w-10 flex cursor-pointer justify-center items-center">
                S
              </div>
              <div className="ring-2 ring-slate-900/10 h-10 w-10 flex cursor-pointer justify-center items-center">
                M
              </div>
              <div className="ring-2 ring-slate-900/10 h-10 w-10 flex cursor-pointer justify-center items-center">
                L
              </div>
              <div className="ring-2 ring-slate-900/10 h-10 w-10 flex cursor-pointer justify-center items-center">
                XL
              </div>
              <div className="ring-2 ring-slate-900/10 h-10 w-10 flex cursor-pointer justify-center items-center">
                XXL
              </div>
            </div>
            <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
              <button onClick={()=>{addToCart(product.id)}} className="border-2 uppercase p-2 border-slate-950 tracking-widest hover:border-slate-400">Add to Cart</button>
              <button className="border-2 uppercase p-2 bg-slate-800 text-white tracking-widest hover:bg-slate-700 ">Buy it now</button>
            </div>
            <p>
              <span className="font-bold ">Category :</span> Women | Jacket | Winter
            </p>
            <p><span className="font-bold">Tags:</span>Modern | Latest</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
