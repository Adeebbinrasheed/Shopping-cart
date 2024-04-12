import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { TbTrash } from "react-icons/tb";

const CartItems = () => {
  const { all_products, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);
  return (
    <section className="pt-24 ">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-900/10 text-start py-12">
            <th className="p-1 py-2">Products</th>
            <th className="p-1 py-2">Title</th>
            <th className="p-1 py-2">Price</th>
            <th className="p-1 py-2">Quantity</th>
            <th className="p-1 py-2">Total</th>
            <th className="p-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <tr
                  key={item.id}
                  className="border-b p-6 text-center font-semibold "
                >
                  <td className="flex justify-center items-center">
                    <img
                      src={item.image}
                      alt="productImage"
                      width={43}
                      height={43}
                      className="rounded-lg"
                    />
                  </td>
                  <td>
                    <div className="line-clamp-2">{item.name}</div>
                  </td>
                  <td>${item.new_price}</td>
                  <td>{cartItems[item.id]}</td>
                  <td>{item.new_price * cartItems[item.id]}</td>
                  <td>
                    <div className="lg:pl-14 pl-6 text-xl">
                      <TbTrash
                        onClick={() => {
                          removeFromCart(item.id);
                        }}
                      />
                    </div>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      <div className="flex flex-col my-16 p-7 gap-3  w-full max-w-[700px]">
        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-xl">Summary</h4>
          <div>
            <div className="flex justify-between ">
              <h1 className="font-semibold ">Subtotal:</h1>
              <h1 className="font-semibold text-gray-500">${getTotalCartAmount()}</h1>
            </div>
          </div>
          <hr />
          <div className="flex justify-between ">
            <h4 className="font-semibold">Shipping Fee:</h4>
            <h4 className="font-semibold text-gray-500">Free</h4>
          </div>
          <hr />
          <div className="font-bold text-lg flex justify-between items-center ">
            <h4>Total:</h4>
            <h4>${getTotalCartAmount()}</h4>
          </div>
        </div>
        <button className="border-2 w-44 rounded-full p-2 bg-black text-white font-bold mt-5">Checkout</button>
        <div className="flex flex-col gap-7">
          <h4 className="font-bold text-lg capitalize">Your Coupon code enter here:</h4>
          <div className="flex justify-between pl-4 rounded-full  border-2  bg-gray-300">
            <input type="text" placeholder="Coupon here" className="bg-transparent border-none p-2  outline-none" />
            <button className="rounded-full px-3  bg-black text-white font-bold hover:bg-gray-700">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
