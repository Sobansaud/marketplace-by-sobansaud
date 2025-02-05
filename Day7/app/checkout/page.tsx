
"use client";

import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "@/components/CartContext";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    zipCode: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const { firstName, lastName, streetAddress, city, phoneNumber, emailAddress } = formData;
    if (firstName && lastName && streetAddress && city && phoneNumber && emailAddress) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  if (!cart) return <p>Loading...</p>;
  if (cart.length === 0)
    return <p className="text-black text-3xl font-bold text-center p-16">Your cart is empty.</p>;

  const totalPrice = cart.reduce(
    (acc: any, item: any) => acc + parseFloat(item.price) * item.quantity,
    0
  );
  const amountInCents = Math.round(totalPrice); // Stripe requires amount in cents

  const handleStripePayment = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amountInCents }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe checkout page
      } else {
        alert("Failed to initiate payment");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const handlePlaceOrder = async () => {
    if (!isFormValid) {
      alert("Please fill all the required fields.");
      return;
    }

    setLoading(true);

    const orderData = {
      _type: "order",
      firstName: formData.firstName,
      lastName: formData.lastName,
      streetAddress: formData.streetAddress,
      zipCode: formData.zipCode,
      city: formData.city,
      phoneNumber: formData.phoneNumber,
      email: formData.emailAddress,
      cartItems: cart.map((item: any) => ({ _type: "reference", _ref: item.id })),
      total: totalPrice,
      orderDate: new Date().toISOString(),
    };

    try {
      const response = await client.create(orderData);
      if (response._id) {
        clearCart();
        alert("Your Order Has Placed Successfully");
      } else {
        alert("Failed to place order, Please Try Again");
      }
    } catch (error) {
      console.error("Error Placing Order:", error);
      alert("Failed to place order, Please Try Again");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="bg-[url('/pic1.png')] bg-cover bg-center h-60 flex items-center justify-center"></div>
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Left Section: Billing Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Billing Details</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">Street Address*</label>
                <input
                  type="text"
                  id="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code*</label>
                <input
                  type="text"
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City*</label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number*</label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address*</label>
                <input
                  type="email"
                  id="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  onBlur={validateForm}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
            </form>
          </div>

          {/* Right Section: Order Summary */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg border shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Summary</h2>
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-4">
                <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-md" />
                <span className="text-gray-700 font-medium">{item.name}</span>
                <span className="text-gray-500">Qty: {item.quantity}</span>
                <span className="text-gray-500">${parseFloat(item.price) * item.quantity}</span>
              </div>
            ))}
            <hr className="border-gray-300 mb-6" />
            <div className="flex justify-between font-semibold text-lg mb-4 text-black">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            {/* Payment Section */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Payment Methods</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <button
                    onClick={handleStripePayment}
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                    disabled={loading || cart.length === 0}
                  >
                    {loading ? "Processing..." : "Pay with Stripe"}
                  </button>
                </div>
                <div className="flex items-center">
                  <input
                    id="cod"
                    type="radio"
                    name="paymentMethod"
                    className="h-4 w-4 text-gray-600 border-gray-300 focus:ring-gray-500"
                  />
                  <label htmlFor="cod" className="ml-2 text-md text-gray-700">
                    Cash on Delivery
                  </label>
                </div>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 focus:outline-none"
              disabled={!isFormValid || loading}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
