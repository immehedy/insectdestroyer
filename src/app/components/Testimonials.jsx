import React from "react";

/** ---------- helpers ---------- **/

const normalizeUrl = (url) => {
  if (!url) return null;
  return url.startsWith("//") ? `https:${url}` : url;
};

const guessMimeFromUrl = (url) => {
  const ext = (url?.split("?")[0].match(/\.(\w+)$/)?.[1] || "").toLowerCase();
  switch (ext) {
    case "mp4": return "video/mp4";
    case "webm": return "video/webm";
    case "ogg":
    case "ogv": return "video/ogg";
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "webp": return "image/*";
    default: return undefined;
  }
};

/** Extract Contentful file object (url, contentType, fileName) from an Asset (REST/GraphQL, localized/unlocalized) */
const getFileFromAsset = (asset) => {
  if (!asset) return null;

  // Unexpanded Link (cannot use)
  if (asset?.sys?.type === "Link" && asset?.sys?.linkType === "Asset") return null;

  // GraphQL Asset: { url, contentType, title }
  if (asset?.url) {
    return {
      url: normalizeUrl(asset.url),
      contentType: asset.contentType || guessMimeFromUrl(asset.url),
      title: asset.title || asset?.name || "media",
    };
  }

  // REST Asset: fields.file (unlocalized)
  const f = asset?.fields?.file;
  if (!f) return null;

  if (f?.url) {
    return {
      url: normalizeUrl(f.url),
      contentType: f.contentType || guessMimeFromUrl(f.url),
      title: asset?.fields?.title || "media",
    };
  }

  // REST Asset: fields.file[locale]
  const localeKey = asset?.sys?.locale || "en-US";
  if (f?.[localeKey]?.url) {
    return {
      url: normalizeUrl(f[localeKey].url),
      contentType: f[localeKey].contentType || guessMimeFromUrl(f[localeKey].url),
      title: asset?.fields?.title || "media",
    };
  }

  // Last resort: first locale with url
  const first = typeof f === "object" && Object.values(f).find((x) => x?.url);
  if (first) {
    return {
      url: normalizeUrl(first.url),
      contentType: first.contentType || guessMimeFromUrl(first.url),
      title: asset?.fields?.title || "media",
    };
  }

  return null;
};

/** Normalize a single review into { kind, src, type, caption } */
const normalizeReview = (review) => {
  // If review is a plain URL
  if (typeof review === "string") {
    const url = normalizeUrl(review);
    const type = guessMimeFromUrl(url);
    const kind = type?.startsWith("video/") ? "video" : "image";
    return { kind, src: url, type, caption: "" };
  }

  // If review looks like a GraphQL Asset
  if (review?.url) {
    const file = getFileFromAsset(review);
    if (!file?.url) return null;
    const kind = file.contentType?.startsWith("video/") ? "video" : "image";
    const caption = review?.description || review?.title || "";
    return { kind, src: file.url, type: file.contentType, caption };
  }

  // If review is a REST Asset (has fields.file)
  if (review?.fields?.file) {
    const file = getFileFromAsset(review);
    if (!file?.url) return null;
    const kind = file.contentType?.startsWith("video/") ? "video" : "image";
    const caption = review?.fields?.description || review?.fields?.title || "";
    return { kind, src: file.url, type: file.contentType, caption };
  }

  // If review is an Entry with a media reference at fields.media (common pattern)
  if (review?.fields?.media) {
    const file = getFileFromAsset(review.fields.media);
    if (!file?.url) return null;
    const kind = file.contentType?.startsWith("video/") ? "video" : "image";
    const caption =
      review?.fields?.caption ||
      review?.fields?.title ||
      review?.fields?.description ||
      "";
    return { kind, src: file.url, type: file.contentType, caption };
  }

  // If entry uses a different field name (e.g., fields.video or fields.image)
  if (review?.fields?.video) {
    const file = getFileFromAsset(review.fields.video);
    if (file?.url) {
      return {
        kind: "video",
        src: file.url,
        type: file.contentType,
        caption: review?.fields?.caption || "",
      };
    }
  }
  if (review?.fields?.image) {
    const file = getFileFromAsset(review.fields.image);
    if (file?.url) {
      return {
        kind: "image",
        src: file.url,
        type: file.contentType,
        caption: review?.fields?.caption || "",
      };
    }
  }

  return null;
};

/** ---------- component ---------- **/

function Testimonials({ reviews }) {
  // Normalize every review item to a renderable shape
  const items = (reviews || [])
    .map(normalizeReview)
    .filter(Boolean);

  return (
    <div>
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center py-3 px-4 mb-4">
        <h2 className="text-xl md:text-2xl font-bold">
          {"আমাদের কাস্টমারদের রিভিউ সমূহ"}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {items.map((media, index) => (
          <div
            key={index}
            className="relative bg-black border-2 border-gray-300 aspect-video flex items-center justify-center overflow-hidden rounded"
          >
            {media.kind === "video" ? (
              <video
                src={media.src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={media.src}
                alt={media.caption || `testimonial-${index}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center text-gray-600 py-8 col-span-full">
            রিভিউ পাওয়া যায়নি।
          </div>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
