"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

const normalizeUrl = (url) => {
  if (!url) return null;
  return url.startsWith("//") ? `https:${url}` : url;
};

const guessMimeFromUrl = (url) => {
  const ext = (url?.split("?")[0].match(/\.(\w+)$/)?.[1] || "").toLowerCase();

  switch (ext) {
    case "mp4":
      return "video/mp4";
    case "webm":
      return "video/webm";
    case "ogg":
    case "ogv":
      return "video/ogg";
    default:
      return "video/mp4";
  }
};

const getAssetFile = (assetOrUrl) => {
  if (!assetOrUrl) return null;

  if (typeof assetOrUrl === "string") {
    return {
      url: normalizeUrl(assetOrUrl),
      contentType: guessMimeFromUrl(assetOrUrl),
      title: "media",
    };
  }

  if (assetOrUrl?.url) {
    return {
      url: normalizeUrl(assetOrUrl.url),
      contentType: assetOrUrl.contentType || guessMimeFromUrl(assetOrUrl.url),
      title: assetOrUrl.title || "media",
    };
  }

  const f = assetOrUrl?.fields?.file;

  if (f?.url) {
    return {
      url: normalizeUrl(f.url),
      contentType: f.contentType || guessMimeFromUrl(f.url),
      title: assetOrUrl?.fields?.title || "media",
    };
  }

  const localeKey = assetOrUrl?.sys?.locale || "en-US";

  if (f?.[localeKey]?.url) {
    return {
      url: normalizeUrl(f[localeKey].url),
      contentType:
        f[localeKey].contentType || guessMimeFromUrl(f[localeKey].url),
      title: assetOrUrl?.fields?.title || "media",
    };
  }

  const first = typeof f === "object" && Object.values(f).find((x) => x?.url);

  if (first) {
    return {
      url: normalizeUrl(first.url),
      contentType: first.contentType || guessMimeFromUrl(first.url),
      title: assetOrUrl?.fields?.title || "media",
    };
  }

  return null;
};

export function VideoSection({ video, bannerImage }) {
  const [errMsg, setErrMsg] = useState("");

  const videoFile = useMemo(() => getAssetFile(video), [video]);
  const bannerFile = useMemo(() => getAssetFile(bannerImage), [bannerImage]);

  const videoRef = useRef(null);

  useEffect(() => {
    setErrMsg("");
  }, [videoFile?.url]);

  const onError = (e) => {
    console.error("[VideoSection] <video> error for src:", videoFile?.url, e);
    setErrMsg("ভিডিও লোড করা যায়নি।");
  };

  const shouldShowVideo = Boolean(videoFile?.url && !errMsg);
  const shouldShowBanner = Boolean(!shouldShowVideo && bannerFile?.url);

  return (
    <section className="px-2 mb-6">
      <div className="relative aspect-video w-full overflow-hidden rounded border-4 border-[#e87514] bg-black">
        {shouldShowVideo ? (
          <video
            key={videoFile.url}
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            className="relative z-10 h-full w-full object-cover"
            onError={onError}>
            <source
              src={videoFile.url}
              type={videoFile.contentType || "video/mp4"}
            />
            Your browser does not support the video tag.
          </video>
        ) : shouldShowBanner ? (
          <Image
            src={bannerFile.url}
            alt={bannerFile.title || "Insect Destroyer bed bug spray banner"}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="relative z-10 object-contain"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-3 text-center text-white">
            <p className="text-sm md:text-base text-gray-300">
              কোনো ভিডিও বা ব্যানার পাওয়া যায়নি
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default VideoSection;
