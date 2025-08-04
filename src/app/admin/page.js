'use client'

import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/order')
      .then((res) => res.json())
      .then((data) => {
        setOrders(data)
        setLoading(false)
      })
  }, [])

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/order?id=${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (res.ok) {
        setOrders((prev) =>
          prev.map((order) =>
            order._id === id ? { ...order, status: newStatus } : order
          )
        )
      }
    } catch (err) {
      console.error('Failed to update status', err)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-gray-600">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🧾 অর্ডার তালিকা (Admin Panel)
      </h1>

      {loading ? (
        <div className="text-center text-gray-500">লোড হচ্ছে...</div>
      ) : orders.length === 0 ? (
        <div className="text-center text-red-500 font-semibold">
          🚫 কোনো অর্ডার পাওয়া যায়নি
        </div>
      ) : (
        <div className="overflow-auto rounded-lg shadow border border-gray-200">
          <table className="min-w-full bg-white text-sm text-left text-gray-700">
            <thead className="bg-gradient-to-r from-orange-100 to-yellow-100 text-gray-800 font-semibold uppercase text-xs">
              <tr>
                <th className="px-4 py-3">নাম</th>
                <th className="px-4 py-3">ফোন</th>
                <th className="px-4 py-3">পণ্য</th>
                <th className="px-4 py-3">মূল্য</th>
                <th className="px-4 py-3">ডেলিভারি</th>
                <th className="px-4 py-3">ডেলিভারি চার্জ</th>
                <th className="px-4 py-3">মোট মূল্য</th>
                <th className="px-4 py-3">ঠিকানা</th>
                <th className="px-4 py-3">অবস্থা</th>
                <th className="px-4 py-3">সময়</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-t hover:bg-gray-50 transition duration-100"
                >
                  <td className="px-4 py-3 whitespace-nowrap">{order.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{order.phone}</td>
                  <td className="px-4 py-3">{order.product?.label || 'N/A'}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    ৳ {order.product?.price || 0}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {order.deliveryLocation === 'inside'
                      ? 'ঢাকার ভিতরে'
                      : 'ঢাকার বাইরে'}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    ৳ {order.deliveryPrice}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    ৳ {order.totalPrice}
                  </td>
                  <td className="px-4 py-3 max-w-xs truncate">{order.address}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <select
                      value={order.status || 'pending'}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                      className="bg-white border border-gray-300 px-2 py-1 rounded"
                    >
                      <option value="pending">⏳ Pending</option>
                      <option value="shipped">✅ Shipped</option>
                      <option value="cancelled">❌ Cancelled</option>
                    </select>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                    {new Date(order.createdAt).toLocaleString('bn-BD')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
