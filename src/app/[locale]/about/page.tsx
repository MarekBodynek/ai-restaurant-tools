import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "About" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function AboutPage() {
  const t = await getTranslations("About");

  return (
    <div className="bg-[#171412] min-h-screen">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#fefce8] tracking-tight mb-6">
            {t("title")}{" "}
            <span className="text-orange-500">{t("titleHighlight")}</span>
          </h1>
          <p className="text-lg text-stone-400 leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-900/50 border border-stone-800/50 rounded-2xl p-8 sm:p-12 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-[#fefce8] mb-4">
                {t("storyTitle")}
              </h2>
              <p className="text-stone-400 leading-relaxed">{t("storyP1")}</p>
              <p className="text-stone-400 leading-relaxed mt-4">
                {t("storyP2")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#fefce8] mb-4">
                {t("missionTitle")}
              </h2>
              <p className="text-stone-400 leading-relaxed">
                {t("missionText")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#fefce8] mb-6">
                {t("valuesTitle")}
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-[#171412] border border-stone-800/50 rounded-xl p-6">
                  <div className="text-2xl mb-3">✦</div>
                  <h3 className="text-lg font-semibold text-[#fefce8] mb-2">
                    {t("curatedTitle")}
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {t("curatedText")}
                  </p>
                </div>
                <div className="bg-[#171412] border border-stone-800/50 rounded-xl p-6">
                  <div className="text-2xl mb-3">⚖</div>
                  <h3 className="text-lg font-semibold text-[#fefce8] mb-2">
                    {t("honestTitle")}
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {t("honestText")}
                  </p>
                </div>
                <div className="bg-[#171412] border border-stone-800/50 rounded-xl p-6">
                  <div className="text-2xl mb-3">🍽</div>
                  <h3 className="text-lg font-semibold text-[#fefce8] mb-2">
                    {t("restaurantFirstTitle")}
                  </h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {t("restaurantFirstText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
