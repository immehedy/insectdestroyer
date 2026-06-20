"use client";

import React, { useMemo, useState } from "react";

function OrderForm({ products = [] }) {
  const defaultProducts = [
    {
      id: "single-400ml",
      label: "১ পিস Z.Killer Power Spray বোতল",
      quantity: "400ml",
      price: 550,
    },
    {
      id: "double-400ml",
      label: "২ পিস Z.Killer Power Spray বোতল",
      quantity: "400ml × 2",
      price: 950,
    },
  ];

  const finalProducts = products?.length ? products : defaultProducts;

  const [selectedProduct, setSelectedProduct] = useState(finalProducts[0]);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [deliveryLocation, setDeliveryLocation] = useState("inside");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const shippingCost = deliveryLocation === "inside" ? 70 : 130;

  const subtotal = useMemo(() => {
    return Number(selectedProduct?.price || 0) * orderQuantity;
  }, [selectedProduct?.price, orderQuantity]);

  const totalPrice = subtotal + shippingCost;

  const increaseQuantity = () => {
    setOrderQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setOrderQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleProductChange = (product) => {
    setSelectedProduct(product);
    setOrderQuantity(1);
  };

  const sendNtfyNotification = async () => {
    const ntfyTopic =
      process.env.NEXT_PUBLIC_NTFY_TOPIC || "insect-destroyer-orders";

    const deliveryText =
      deliveryLocation === "inside" ? "ঢাকা শহরের মধ্যে" : "ঢাকা শহরের বাইরে";

    const orderText = `
নতুন অর্ডার এসেছে ✅

নাম: ${name}
মোবাইল: ${phone}
ঠিকানা: ${address}

প্রোডাক্ট: ${selectedProduct.label}
প্রোডাক্ট প্যাকেজ: ${selectedProduct.quantity}
অর্ডার Quantity: ${orderQuantity}

প্রোডাক্ট মূল্য: ৳ ${selectedProduct.price}
Subtotal: ৳ ${subtotal}
ডেলিভারি এলাকা: ${deliveryText}
ডেলিভারি চার্জ: ৳ ${shippingCost}
Total: ৳ ${totalPrice}

Payment: Cash on Delivery
`.trim();

    await fetch(`https://ntfy.sh/${ntfyTopic}`, {
      method: "POST",
      headers: {
        Title: "New Z. Killer Power Order",
        Priority: "high",
        Tags: "shopping_cart,package",
      },
      body: orderText,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !address || !selectedProduct || !deliveryLocation) {
      setMessage("সব ফিল্ড পূরণ করুন");
      return;
    }

    setLoading(true);
    setMessage("");

    await sendNtfyNotification();

    setLoading(false);

    // try {
    //   const res = await fetch("/api/order", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       name,
    //       phone,
    //       address,
    //       product: selectedProduct,
    //       quantity: orderQuantity,
    //       deliveryLocation,
    //       deliveryPrice: shippingCost,
    //       subtotal,
    //       totalPrice,
    //     }),
    //   });

    //   if (res.ok) {

    //     setMessage("✅ অর্ডার সফলভাবে গ্রহণ করা হয়েছে!");
    //     setName("");
    //     setPhone("");
    //     setAddress("");
    //     setDeliveryLocation("inside");
    //     setOrderQuantity(1);
    //     setSelectedProduct(finalProducts[0]);
    //   } else {
    //     setMessage("❌ অর্ডার পাঠাতে ব্যর্থ");
    //   }
    // } catch (err) {
    //   console.error(err);
    //   setMessage("❌ সার্ভারে সমস্যা হয়েছে");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div
      className="bg-white border-2 border-black border-t-0 rounded-b-xl p-3 text-gray-800"
      id="order-form">
      <div className="rounded-xl border-4 border-[#e87514] bg-[#fff7dc] p-3 md:p-6">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl bg-white p-4 md:p-6">
          <h3 className="mb-5 text-center text-2xl font-black text-gray-900">
            অর্ডার ফর্ম পূরণ করুন
          </h3>

          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {finalProducts.map((product) => (
              <label
                key={product.id}
                htmlFor={product.id}
                className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
                  selectedProduct.id === product.id
                    ? "border-[#e87514] bg-orange-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-[#e87514]"
                }`}>
                <div className="mb-2 flex items-start gap-2">
                  <input
                    type="radio"
                    id={product.id}
                    name="product"
                    className="mt-1"
                    checked={selectedProduct.id === product.id}
                    onChange={() => handleProductChange(product)}
                  />
                  <div>
                    <p className="font-bold">{product.label}</p>
                    <p className="text-sm text-gray-600">
                      পরিমাণ: {product.quantity}
                    </p>
                  </div>
                </div>

                <p className="text-xl font-black text-green-600">
                  ৳ {product.price}
                </p>
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <h4 className="mb-4 text-lg font-black text-gray-900">
                Billing Details
              </h4>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-semibold text-gray-700">
                    আপনার নাম লিখুন *
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-[#e87514]"
                    placeholder="নাম লিখুন"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-semibold text-gray-700">
                    মোবাইল নম্বর লিখুন *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-[#e87514]"
                    placeholder="০১৭xxxxxxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="mb-1 block text-sm font-semibold text-gray-700">
                    সম্পূর্ণ ঠিকানা লিখুন *
                  </label>
                  <textarea
                    id="address"
                    className="h-24 w-full rounded-lg border border-gray-300 px-3 py-3 outline-none focus:border-[#e87514]"
                    placeholder="বাড়ি, রোড, এলাকা"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-[#fffdf1] p-4">
              <h4 className="mb-4 text-lg font-black text-gray-900">
                Your Order
              </h4>

              <div className="mb-5">
                <h5 className="mb-2 font-bold text-gray-800">
                  ডেলিভারির ঠিকানা কোথায়?
                </h5>

                <div className="space-y-2">
                  <label className="flex cursor-pointer items-center rounded-lg border border-gray-200 bg-white p-3">
                    <input
                      type="radio"
                      name="delivery"
                      value="inside"
                      checked={deliveryLocation === "inside"}
                      onChange={() => setDeliveryLocation("inside")}
                      className="mr-2"
                    />
                    ঢাকা শহরের মধ্যে ৳৭০
                  </label>

                  <label className="flex cursor-pointer items-center rounded-lg border border-gray-200 bg-white p-3">
                    <input
                      type="radio"
                      name="delivery"
                      value="outside"
                      checked={deliveryLocation === "outside"}
                      onChange={() => setDeliveryLocation("outside")}
                      className="mr-2"
                    />
                    ঢাকা শহরের বাইরে ৳১৩০
                  </label>
                </div>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-gray-900">
                      {selectedProduct.label}
                    </p>
                    <p className="text-sm text-gray-500">
                      {selectedProduct.quantity}
                    </p>
                    <p className="text-sm font-semibold text-green-600">
                      ৳ {selectedProduct.price}
                    </p>
                  </div>

                  <div className="flex items-center rounded-full border border-gray-300">
                    <button
                      type="button"
                      onClick={decreaseQuantity}
                      className="h-9 w-9 rounded-l-full text-lg font-bold hover:bg-gray-100">
                      -
                    </button>
                    <span className="min-w-10 text-center font-bold">
                      {orderQuantity}
                    </span>
                    <button
                      type="button"
                      onClick={increaseQuantity}
                      className="h-9 w-9 rounded-r-full text-lg font-bold hover:bg-gray-100">
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-2 border-t pt-4 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>৳ {subtotal}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>৳ {shippingCost}</span>
                  </div>

                  <div className="flex justify-between border-t pt-3 text-lg font-black">
                    <span>Total</span>
                    <span className="text-green-600">৳ {totalPrice}</span>
                  </div>

                  <div className="rounded-lg bg-green-50 p-3 text-sm font-semibold text-green-700">
                    Cash on Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>

          {message && (
            <div className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-center text-sm font-semibold text-red-600">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-green-600 to-emerald-700 py-4 text-lg font-black text-white transition-all duration-200 hover:shadow-lg disabled:opacity-60">
            {loading ? "অর্ডার পাঠানো হচ্ছে..." : `অর্ডার করুন ৳ ${totalPrice}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
