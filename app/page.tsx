import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import ProblemSolutionSection from "./sections/ProblemSolutionSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ProductShowcaseSection from "./sections/ProductShowcaseSection";
import CompatibilityWidgetSection from "./sections/CompatibilityWidgetSection";
import SocialProofSection from "./sections/SocialProofSection";
import QuickFaqSection from "./sections/QuickFaqSection";
import FinalCtaSection from "./sections/FinalCtaSection";
import Footer from "./components/Footer";
import JsonLd from "@/components/JsonLd";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://carplaygo.fr";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "CarplayGO",
      description: "Adaptateur CarPlay sans fil plug & play",
      inLanguage: "fr-FR",
      publisher: {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "CarplayGO",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "support@carplaygo.fr",
        contactType: "customer service",
        areaServed: "FR",
        availableLanguage: ["French"],
      },
    },
    {
      "@type": "Product",
      name: "CarplayGO — Adaptateur CarPlay sans fil",
      image: `${baseUrl}/images/product-carplay.jpg`,
      description:
        "Transformez votre CarPlay filaire en CarPlay sans fil en 30 secondes. Plug & play, compatible iPhone, livraison 24h.",
      brand: {
        "@type": "Brand",
        name: "CarplayGO",
      },
      sku: "CPG-001",
      offers: {
        "@type": "Offer",
        url: `${baseUrl}/produit`,
        priceCurrency: "EUR",
        price: "89.00",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 30,
          returnMethod: "https://schema.org/ReturnByMail",
          returnFees: "https://schema.org/FreeReturn",
        },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: {
            "@type": "MonetaryAmount",
            value: "0",
            currency: "EUR",
          },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: {
              "@type": "QuantitativeValue",
              minValue: 0,
              maxValue: 1,
              unitCode: "DAY",
            },
            transitTime: {
              "@type": "QuantitativeValue",
              minValue: 2,
              maxValue: 4,
              unitCode: "DAY",
            },
          },
        },
        seller: {
          "@type": "Organization",
          name: "CarplayGO",
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "2341",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <ProductShowcaseSection />
        <CompatibilityWidgetSection />
        <SocialProofSection />
        <QuickFaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
