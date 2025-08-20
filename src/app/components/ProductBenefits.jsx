function ProductBenefits({ whyWouldItWork, mediaTitle, mediaSubtitle, media }) {
  const renderMedia = () => {
    if (!media) {
      return <span className="text-4xl">🧴</span>;
    }

    const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(media);
    const isVideo = /\.(mp4|webm|ogg)$/i.test(media);

    if (isImage) {
      return (
        <img
          src={media}
          alt="product media"
          className="w-full h-full object-cover rounded-lg"
        />
      );
    }

    if (isVideo) {
      return (
        <video
          src={media}
          controls
          className="w-full h-full object-cover rounded-lg"
        />
      );
    }

    // fallback if media is something else
    return <span className="text-4xl">🧴</span>;
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center py-3 px-4 mb-4">
        <h2 className="text-xl md:text-2xl font-bold">
          {whyWouldItWork?.title}
        </h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {whyWouldItWork?.benefits?.map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-orange-500 mr-3 text-xl">✓</span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">
                {mediaTitle}
              </div>
              <div className="text-sm text-gray-600 mb-4">
                {mediaSubtitle}
              </div>
              <div className="w-32 h-32 mx-auto bg-orange-200 rounded-lg flex items-center justify-center overflow-hidden">
                {renderMedia()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBenefits;
