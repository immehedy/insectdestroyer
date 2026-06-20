import { BannerSection } from "./components/BannerSection";
import Contact from "./components/Contact";
import { CTAButtons } from "./components/CTABtn";
import FacebookComments from "./components/FacebookComments";
import Footer from "./components/Footer";
import GuaranteeSection from "./components/GuaranteeSection";
import Logo from "./components/Logo";
import OrderBtn from "./components/OrderBtn";
import OrderForm from "./components/OrderForm";
import Pricing from "./components/Pricing";
import ProductBenefits from "./components/ProductBenefits";
import Testimonials from "./components/Testimonials";
import { VideoSection } from "./components/VideoSection";
import WhyChoose from "./components/WhyChoose";
import { contentfulClient } from "./lib/contentful";

export default async function Home() {
  const res = await contentfulClient?.getEntries({
    content_type: "insectdestroyerLanding",
  });

  const content = res?.items?.[0]?.fields || {};

  const cockroachProducts = [
    {
      id: "single-400ml",
      label: "১ পিস ছারপোকার বোতল",
      quantity: "400ml",
      price: 550,
    },
    {
      id: "double-400ml",
      label: "২ পিস ছারপোকার বোতল",
      quantity: "400ml × 2",
      price: 950,
    },
  ];

  return (
    <main className="min-h-screen bg-[#fbf9d9] text-[#151515]">
      <div className="max-w-[430px] md:max-w-7xl mx-auto px-3 py-2">
        <Logo />

        <BannerSection
          title1="ছারপোকা নির্মূলে ল্যাব সার্টিফাইড Advanced ফর্মুলা"
          title2="এটি ছারপোকার বিরুদ্ধে ১০০% কার্যকরী ও দীর্ঘস্থায়ী এর সমাধান"
          title3={null}
        />

        <VideoSection video={content?.introVideo} bannerImage="/banner.png" />

        <OrderBtn />

        <ProductBenefits
          whyWouldItWork={{
            title: "আমাদের স্প্রেটি কেন ব্যবহার করবেন?",
            benefits: [
              "দীর্ঘস্থায়ী কার্যকর — একবার স্প্রে করলে দীর্ঘ সময় কাজ করে।",
              "সুরক্ষিত ও নির্ভরযোগ্য — ঘরোয়া ব্যবহারের জন্য উপযোগী।",
              "সহজ ব্যবহার — স্প্রে করা সহজ এবং দ্রুত।",
              "নিজস্ব ফর্মুলা — আমদানি করা স্প্রে নয়, আমাদের নিজস্বভাবে তৈরি কার্যকরী ফর্মুলা।",
              "দ্রুত ফলাফল — ছারপোকা নিয়ন্ত্রণে দ্রুত কাজ করে।",
              "নিয়মিত ব্যবহার — দীর্ঘদিন রেখে ব্যবহারে ভালো ফল পাওয়া যায়।",
            ],
          }}
        />

        <OrderBtn />

        <GuaranteeSection guarantees={content?.guarantees} />

        <OrderBtn />

        {content?.reviewMedias && (
          <Testimonials reviews={content.reviewMedias} />
        )}

        <Pricing
          productPrices={{
            plans: [
              {
                name: "Insect Destroyer 400ml ১ পিস",
                regularPrice: 690,
                offerPrice: 550,
              },
              {
                name: "Insect Destroyer 400ml ২ পিস",
                regularPrice: 1190,
                offerPrice: 950,
              },
            ],
          }}
        />

        <Contact helpLine={content?.helpLine} />

        <div className="bg-white border-2 border-black rounded-t-xl px-3 py-5 mt-8">
          <h2 className="text-center text-xl md:text-3xl font-black leading-snug">
            আপনি যদি ছারপোকা/ ছারপোকার স্প্রে নিতে চান তাহলে অর্ডার কনফার্ম করে
            জানাবেন
          </h2>
        </div>

        <OrderForm products={cockroachProducts} />

        <Footer helpLine={content?.helpLine} />
      </div>
    </main>
  );
}
