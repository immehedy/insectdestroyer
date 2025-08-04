// app/api/order/route.js
import { connectToDatabase } from "@/app/lib/mongodb";
import Order from "@/app/models/Order";

export async function GET() {
  try {
    await connectToDatabase();
    const orders = await Order.find().sort({ createdAt: -1 }).limit(100);
    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      address,
      product,
      deliveryLocation,
      deliveryPrice,
      totalPrice,
    } = body;

    if (!name || !phone || !address || !product || !deliveryLocation) {
      return new Response(JSON.stringify({ error: "সব ফিল্ড পূরণ করুন" }), {
        status: 400,
      });
    }

    await connectToDatabase();

    const newOrder = await Order.create({
      name,
      phone,
      address,
      deliveryLocation,
      product,
      deliveryPrice,
      totalPrice,
    });

    return new Response(
      JSON.stringify({ success: true, orderId: newOrder._id }),
      {
        status: 200,
      }
    );
  } catch (err) {
    console.error("❌ Order creation failed:", err);
    return new Response(
      JSON.stringify({ error: "❌ অর্ডার সংরক্ষণে সমস্যা হয়েছে" }),
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
  
    if (!id) {
      return new Response(JSON.stringify({ error: 'Missing order ID' }), { status: 400 })
    }
  
    const body = await request.json()
    const { status } = body
  
    try {
      await connectToDatabase()
      const updated = await Order.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      )
      if (!updated) {
        return new Response(JSON.stringify({ error: 'Order not found' }), { status: 404 })
      }
      return new Response(JSON.stringify(updated), { status: 200 })
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
    }
  }
