function OrderBtn() {
  return (
    <div className="text-center my-4">
      <a
        href="#order-form"
        className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-4xl font-bold shadow hover:scale-105 transition">
        অর্ডার করতে চাই
        <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
          ➜
        </span>
      </a>
    </div>
  );
}

export default OrderBtn;
