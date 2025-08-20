function GuaranteeSection({ guarantees }) {
  return (
    <div>
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center py-3 px-4 mb-4">
        <h2 className="text-xl md:text-2xl font-bold">{guarantees?.title}</h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="space-y-3">
          {guarantees?.guarantees?.map((item, idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-orange-500 mr-3 text-xl">✓</span>
              <p className="text-gray-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GuaranteeSection;
