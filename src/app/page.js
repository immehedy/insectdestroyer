import { BannerSection } from "./components/BannerSection";
import Contact from "./components/Contact";
import { CTAButtons } from "./components/CTABtn";
import FacebookComments from "./components/FacebookComments";
import Footer from "./components/Footer";
import GuaranteeSection from "./components/GuaranteeSection";
import Logo from "./components/logo";
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
  const content = res.items[0].fields;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Logo Section */}
        <Logo />

        {/* Banner Messages */}
        <BannerSection
          title1={content?.title1}
          title2={content?.title2}
          title3={content?.title3}
        />

        {/* Main Video Section */}
        <VideoSection video={content?.introVideo} />

        {/* Call to Action Buttons */}
        <CTAButtons />

        {/* Product Benefits Section */}
        <ProductBenefits
          whyWouldItWork={content?.whyWouldItWork}
          mediaTitle={content?.whyWouldItWorkMediaTitle}
          mediaSubtitle={content?.whyWouldItWorkMediaSubTitle}
          media={content?.whyWouldItWorkMedia}
        />

        {/* Order Button */}
        <OrderBtn />

        {/* Guarantee Section */}
        <GuaranteeSection guarantees={content?.guarantees} />

        {/* Order Button */}
        <OrderBtn />

        {/* Customer Testimonials */}
        {content?.reviewMedias && <Testimonials reviews={content?.reviewMedias} />}

        {/* Facebook Comments Simulation */}
        {/* <FacebookComments /> */}

        {/* Pricing Section */}
        <Pricing productPrices={content?.productPrices} />

        {/* Why Choose Us */}
        <WhyChoose whyChoose={content?.whyBeliveInUs} />

        {/* Contact Information */}
        <Contact helpLine={content?.helpLine} />

        {/* Order Form Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white text-center py-4 px-4 mb-4">
          <h2 className="text-xl md:text-2xl font-bold">
            {"অর্ডার করতে নিচের ফর্মটি পূরণ করুন ⬇️"}
          </h2>
        </div>

        {/* Order Form */}
        <OrderForm products={content?.products} />

        {/* Footer Contact */}
        <Footer helpLine={content?.helpLine} />
      </div>
    </div>
  );
}
