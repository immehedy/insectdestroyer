function Pricing({ productPrices }) {
  return (
    <section className="py-5">
      <div className="bg-[#e87514] text-white text-center py-2 rounded mb-4">
        <h2 className="text-xl md:text-4xl font-black">
          স্পেশাল অফার প্যাকেজসমূহ
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        {productPrices?.plans?.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#fffdf1] border-2 border-[#e87514] rounded-lg p-3 text-center">
            <h3 className="font-black text-2xl">{item.name}</h3>

            <p className="text-xl font-bold mt-2">
              রেগুলার মূল্য :
              <span className="text-red-600 line-through ml-1">
                {item.regularPrice} টাকা
              </span>
            </p>

            <p className="font-black text-green-600 text-2xl">
              অফার মূল্য : {item.offerPrice} টাকা
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
