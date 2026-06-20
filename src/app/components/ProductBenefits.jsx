function ProductBenefits({ whyWouldItWork }) {
  return (
    <section className="bg-[#fbf9d9] py-4">
      <div className="border border-black rounded bg-[#fffdf1] p-4 md:p-6 mb-5">
        <div className="bg-[#e87514] text-white text-center py-2 px-3 rounded mb-4">
          <h2 className="text-xl md:text-4xl font-black">
            {whyWouldItWork?.title}
          </h2>
        </div>

        <div className="space-y-3 my-8">
          {whyWouldItWork?.benefits?.map((item, index) => (
            <div key={index}>
              <p className="text-[#e87514] font-black text-xl">
                {index + 1}. {item.split("—")[0]}
              </p>
              {item.includes("—") && (
                <p className="text-3xl font-medium text-black">
                  {item.split("—")[1]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductBenefits;
