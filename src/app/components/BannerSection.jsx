export function BannerSection({ title1, title2 }) {
  return (
    <section className="text-center mb-5">
      {title1 && (
        <h1 className="text-[21px] md:text-5xl font-black leading-tight mb-6">
          <span className="text-black">ছারপোকা </span>
          <span className="text-[#e87514]">নির্মূলে</span>
          <span className="text-black"> ল্যাব সার্টিফাইড </span>
          <span className="text-[#e87514]">Advanced</span>
          <span className="text-black"> ফর্মুলা</span>
        </h1>
      )}

      {title2 && (
        <div className="border border-[#e87514] bg-[#fff7dc] px-3 py-2 text-[#9a3f00] text-sm md:text-4xl font-semibold">
          {title2}
        </div>
      )}
    </section>
  );
}
