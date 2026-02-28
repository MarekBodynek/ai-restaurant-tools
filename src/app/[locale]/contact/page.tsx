"use client";

import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Contact");

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
        <div className="max-w-2xl mx-auto">
          <div className="bg-stone-900/50 border border-stone-800/50 rounded-2xl p-8 sm:p-12">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  {t("nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-[#171412] border border-stone-700 rounded-lg text-[#fefce8] placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder={t("namePlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  {t("emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-[#171412] border border-stone-700 rounded-lg text-[#fefce8] placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder={t("emailPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  {t("subjectLabel")}
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-[#171412] border border-stone-700 rounded-lg text-[#fefce8] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                >
                  <option value="">{t("subjectDefault")}</option>
                  <option value="submit-tool">{t("subjectSubmitTool")}</option>
                  <option value="partnership">
                    {t("subjectPartnership")}
                  </option>
                  <option value="general">{t("subjectGeneral")}</option>
                  <option value="issue">{t("subjectIssue")}</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  {t("messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-[#171412] border border-stone-700 rounded-lg text-[#fefce8] placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                  placeholder={t("messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-[#fefce8] font-semibold rounded-lg transition-colors duration-200"
              >
                {t("sendButton")}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-stone-800/50 text-center">
              <p className="text-sm text-stone-400">
                {t("emailDirect")}{" "}
                <a
                  href="mailto:contact@restauranttools.ai"
                  className="text-orange-400 hover:text-orange-300 transition-colors"
                >
                  contact@restauranttools.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
