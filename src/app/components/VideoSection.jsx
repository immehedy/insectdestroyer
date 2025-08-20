'use client'

import React, { useMemo, useRef, useState, useEffect } from "react";

const normalizeUrl = (url) => {
  if (!url) return null;
  if (url.startsWith("//")) return `https:${url}`;
  return url;
};

const guessMimeFromUrl = (url) => {
  const ext = (url.split("?")[0].match(/\.(\w+)$/)?.[1] || "").toLowerCase();
  switch (ext) {
    case "mp4": return "video/mp4";
    case "webm": return "video/webm";
    case "ogg":
    case "ogv": return "video/ogg";
    default: return "video/mp4";
  }
};

const getVideoFile = (assetOrUrl) => {
  if (!assetOrUrl) return null;

  // Plain URL
  if (typeof assetOrUrl === "string") {
    const url = normalizeUrl(assetOrUrl);
    return { url, contentType: guessMimeFromUrl(url) };
  }

  // GraphQL asset
  if (assetOrUrl?.url) {
    return {
      url: normalizeUrl(assetOrUrl.url),
      contentType: assetOrUrl.contentType || guessMimeFromUrl(assetOrUrl.url),
      title: assetOrUrl.title || "video",
    };
  }

  // REST asset (unlocalized)
  const f = assetOrUrl?.fields?.file;
  if (f?.url) {
    return {
      url: normalizeUrl(f.url),
      contentType: f.contentType || guessMimeFromUrl(f.url),
      title: assetOrUrl?.fields?.title || "video",
    };
  }

  // Localized REST asset
  const localeKey = assetOrUrl?.sys?.locale || "en-US";
  if (f?.[localeKey]?.url) {
    return {
      url: normalizeUrl(f[localeKey].url),
      contentType: f[localeKey].contentType || guessMimeFromUrl(f[localeKey].url),
      title: assetOrUrl?.fields?.title || "video",
    };
  }

  // Fallback: first locale
  const first = typeof f === "object" && Object.values(f).find((x) => x?.url);
  if (first) {
    return {
      url: normalizeUrl(first.url),
      contentType: first.contentType || guessMimeFromUrl(first.url),
      title: assetOrUrl?.fields?.title || "video",
    };
  }

  return null;
};

export function VideoSection({ video }) {
  const [errMsg, setErrMsg] = useState("");
  const file = useMemo(() => getVideoFile(video), [video]);
  const videoRef = useRef(null);

  // Log codec support hints
  useEffect(() => {
    if (!file?.url) return;
    const probe = document.createElement("video");
    const mp4Basic = probe.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'); // H.264/AAC baseline
    const mp4Generic = probe.canPlayType("video/mp4");
    // eslint-disable-next-line no-console
    console.log("[VideoSection] canPlayType mp4 baseline:", mp4Basic || "(empty)");
    console.log("[VideoSection] canPlayType mp4 generic:", mp4Generic || "(empty)");
  }, [file?.url]);

  const onError = (e) => {
    console.error("[VideoSection] <video> error for src:", file?.url, e);
    setErrMsg("ভিডিও লোড করা যায়নি। দয়া করে নিচের লিঙ্ক থেকে চেষ্টা করুন।");
  };

  const showFallback = !file?.url || errMsg;

  return (
    <div className="px-2 mb-6">
      <div className="relative bg-black border-4 border-red-500 aspect-video w-full flex items-center justify-center overflow-hidden">
        {!showFallback ? (
          <video
            key={file.url}              // Force reload if URL changes
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            // Important: make it positioned so z-index works
            className="relative z-10 w-full h-full object-cover"
            onError={onError}
          >
            <source src={file.url} type={file.contentType || "video/mp4"} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="text-center text-white z-10 px-3">
            <div className="mb-3">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 md:w-8 md:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-300">
              {"ভিডিও দেখতে প্লে বাটনে ক্লিক করুন"}
            </p>
            {file?.url && (
              <p className="text-xs mt-2 text-gray-300">
                ভিডিও চালু হচ্ছে না?{" "}
                <a href={file.url} target="_blank" rel="noreferrer" className="underline">
                  নতুন ট্যাবে খুলুন
                </a>
              </p>
            )}
            {errMsg && <p className="text-xs mt-1 text-red-400">{errMsg}</p>}
          </div>
        )}

        {/* Overlay: behind video and non-interactive */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
