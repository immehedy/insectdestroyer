'use client'

import React, { useState } from 'react'

const products = [
  {
    id: 'product1',
    label: '২ পিস হারপোকা মারার স্প্রে (৫০০ml)',
    quantity: '৫০০ml',
    price: 690,
  },
  {
    id: 'product2',
    label: '৩ পিস হারপোকা মারার স্প্রে (৫০০ml)',
    quantity: '৫০০ml',
    price: 990,
  },
]

function OrderForm() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [deliveryLocation, setDeliveryLocation] = useState('inside')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const shippingCost = deliveryLocation === 'inside' ? 70 : 130
  const totalPrice = selectedProduct.price + shippingCost

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !phone || !address || !selectedProduct || !deliveryLocation) {
      setMessage('সব ফিল্ড পূরণ করুন')
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          address,
          product: selectedProduct,
          deliveryLocation,
        }),
      })

      const data = await res.json()
      if (res.ok) {
        setMessage('✅ অর্ডার সফলভাবে গ্রহণ করা হয়েছে!')
        setName('')
        setPhone('')
        setAddress('')
        setDeliveryLocation('inside')
      } else {
        setMessage(data?.error || '❌ অর্ডার পাঠাতে ব্যর্থ')
      }
    } catch (err) {
      setMessage('❌ সার্ভারে সমস্যা হয়েছে')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='text-gray-600' id='order-form'>
      <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg p-6 border-4 border-orange-300">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">অর্ডার ফর্ম পূরণ করুন:</h3>

          {/* Product Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {products.map((product) => (
              <label
                key={product.id}
                htmlFor={product.id}
                className={`border-2 cursor-pointer ${
                  selectedProduct.id === product.id ? 'border-green-500 bg-green-50' : 'border-orange-200'
                } rounded-lg p-4 transition-all`}
              >
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={product.id}
                    name="product"
                    className="mr-2"
                    checked={selectedProduct.id === product.id}
                    onChange={() => setSelectedProduct(product)}
                  />
                  <span className="font-semibold">{product.label}</span>
                </div>
                <div className="text-sm text-gray-600">পরিমাণ: {product.quantity}</div>
                <div className="text-lg font-bold text-green-600">৳ {product.price}</div>
              </label>
            ))}
          </div>

          {/* Delivery Location */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-2">ডেলিভারির ঠিকানা কোথায়?</h4>
            <div className="flex items-center gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="delivery"
                  value="inside"
                  checked={deliveryLocation === 'inside'}
                  onChange={() => setDeliveryLocation('inside')}
                  className="mr-2"
                />
                ঢাকা শহরের মধ্যে (৳৭০)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="delivery"
                  value="outside"
                  checked={deliveryLocation === 'outside'}
                  onChange={() => setDeliveryLocation('outside')}
                  className="mr-2"
                />
                ঢাকা শহরের বাইরে (৳১৩০)
              </label>
            </div>
          </div>

          {/* Billing Details */}
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3">Billing details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  আপনার নাম লিখুন *
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="নাম লিখুন"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  মোবাইল নম্বর লিখুন *
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="০১৭xxxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  সম্পূর্ণ ঠিকানা লিখুন *
                </label>
                <textarea
                  id="address"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 h-20"
                  placeholder="বাড়ি, রোড, এলাকা"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-bold text-gray-800 mb-3">Your order</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>{selectedProduct.label} × 1</span>
                <span>৳ {selectedProduct.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>৳ {selectedProduct.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>৳ {shippingCost}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>Total</span>
                <span>৳ {totalPrice}</span>
              </div>
              <div className="text-sm text-gray-600">Cash on Delivery</div>
            </div>
          </div>

          {message && <div className="mb-4 text-center text-sm text-red-600">{message}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-4 rounded-lg text-lg font-bold hover:shadow-lg transition-all duration-200 disabled:opacity-60"
          >
            {loading ? 'অর্ডার পাঠানো হচ্ছে...' : `অর্ডার করুন ৳ ${totalPrice}`}
          </button>
        </form>
      </div>
    </div>
  )
}

export default OrderForm
