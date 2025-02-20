"use client"

import Image from "next/image";


const CartModal = () => {
  const cartItems = true;
  return (
    <div className=" w-max absolute z-20 shadow-md bg-white flex flex-col gap-6 p-4 rounded-md top-12 right-0">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <div className="flex flex-col gap-4 ">
            {/**List */}
            {/**ITEM */}
            <div className="flex gap-4">
              <Image src="/headphones.jpg"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/**TOP */}
                <div>
                  {/**TITLE */}
                  <div className="flex ic justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/**DESC */}
                  <div className="text-sm text-gray-500">
                    available
                  </div>
                </div>
                {/**BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image src="/headphones.jpg"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/**TOP */}
                <div>
                  {/**TITLE */}
                  <div className="flex ic justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/**DESC */}
                  <div className="text-sm text-gray-500">
                    available
                  </div>
                </div>
                {/**BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/**BOTTOM */}
            <div>
              <div className="flex items-center justify-between font-semibold">
                <span>Subtotal</span>
                <span>$49</span>
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
              </div>
            </div>
          </div>
        </>

      )}
    </div>
  )
}

export default CartModal