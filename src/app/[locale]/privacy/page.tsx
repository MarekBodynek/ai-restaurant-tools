import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Privacy" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function PrivacyPage() {
  const t = await getTranslations("Privacy");

  return (
    <div className="bg-[#171412] min-h-screen">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-[#fefce8] tracking-tight mb-8">
            {t("title")}
          </h1>
          <div className="prose prose-invert prose-stone max-w-none space-y-6 text-stone-400 leading-relaxed">
            <p className="text-sm text-stone-500">{t("lastUpdated")}</p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">
              {t("section1Title")}
            </h2>
            <p>{t("section1Text")}</p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">
              {t("section2Title")}
            </h2>
            <p>{t("section2Text")}</p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">
              {t("section3Title")}
            </h2>
            <p>{t("section3Text")}</p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">
              {t("section4Title")}
            </h2>
            <p>{t("section4Text")}</p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">
              {t("section5Title")}
            </h2>
            <p>
              {t("section5Text")}{" "}
              <a
                href="mailto:contact@restauranttools.ai"
                className="text-orange-400 hover:text-orange-300"
              >
                contact@restauranttools.ai
              </a>
              .
            </p>

            <h2 className="text-xl font-bold text-[#fefce8] mt-8 mb-3">
              {t("section6Title")}
            </h2>
            <p>
              {t("section6Text")}{" "}
              <a
                href="mailto:contact@restauranttools.ai"
                className="text-orange-400 hover:text-orange-300"
              >
                contact@restauranttools.ai
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
