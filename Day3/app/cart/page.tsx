


"use client";

import { useCart } from "@/components/CartContext";
import Link from "next/link";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[url('/cart.png.png')] bg-cover bg-center h-60 flex items-center justify-center"></header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        {cart.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty!</p>
        ) : (
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 bg-white p-5 shadow-md rounded-md">
              <table className="w-full text-left">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className="py-4 px-4">{item.name}</td>
                      <td className="py-4 px-4">{item.price}</td>
                      <td className="py-4 px-4">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item.id, parseInt(e.target.value))
                          }
                          className="w-16 text-center border border-gray-300 rounded"
                        />
                      </td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="col-span-12 md:col-span-4 bg-white p-5 shadow-md rounded-md">
              <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
              <div className="flex justify-between py-2">
                <span>Total:</span>
                <span>Rs. {total.toFixed(2)}</span>
              </div>
              <button className="w-full mt-4 bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
                <Link href="/checkout">Proceed to Checkout</Link>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
