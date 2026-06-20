"use client";

import Image from "next/image";

function Pricing({ productPrices, productImage }) {
  const imageUrl =
    typeof productImage === "string"
      ? productImage
      : productImage?.fields?.file?.url
      ? `https:${productImage.fields.file.url}`
      : productImage?.url;

  return (
    <section className="py-6 px-2">
      <div className="bg-[#e87514] text-white text-center py-3 rounded-xl mb-5 shadow-md">
        <h2 className="text-xl md:text-4xl font-black">
          স্পেশাল অফার প্যাকেজসমূহ
        </h2>
      </div>

      {imageUrl && (
        <div className="mb-6 flex justify-center">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border-4 border-[#e87514] bg-gradient-to-b from-[#fff7df] to-white shadow-xl">
            <div className="absolute inset-x-0 top-0 h-24 bg-[#e87514]/15" />

            <div className="relative aspect-[4/5] w-full">
              <Image
                src={imageUrl}
                alt="Z Killer Power Pest Control Product"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain p-4 drop-shadow-2xl"
              />
            </div>

            <div className="bg-[#003b7a] px-4 py-3 text-center text-white">
              <p className="text-lg font-black">Z. KILLER POWER</p>
              <p className="text-sm font-semibold text-yellow-300">
                Pest Control Solution · Ready To Spray
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {productPrices?.plans?.map((item, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl border-2 border-[#e87514] bg-[#fffdf1] p-5 text-center shadow-lg">
            <div className="absolute right-0 top-0 rounded-bl-2xl bg-red-600 px-3 py-1 text-sm font-black text-white">
              অফার
            </div>

            <h3 className="mt-3 text-2xl font-black text-[#003b7a]">
              {item.name}
            </h3>

            <p className="mt-3 text-lg font-bold text-gray-700">
              রেগুলার মূল্য :
              <span className="ml-2 text-red-600 line-through">
                {item.regularPrice} টাকা
              </span>
            </p>

            <p className="mt-1 text-3xl font-black text-green-600">
              {item.offerPrice} টাকা
            </p>

            <button className="mt-4 w-full rounded-full bg-[#e87514] py-3 text-lg font-black text-white shadow-md">
              এখনই অর্ডার করুন
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
