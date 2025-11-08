"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-5 md:px-20 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {t("company.title")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-green-400 transition">
                  {t("company.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-green-400 transition"
                >
                  {t("company.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-400 transition"
                >
                  {t("company.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {t("services.title")}
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-green-400 transition">
                {t("services.production")}
              </li>
              <li className="hover:text-green-400 transition">
                {t("services.storage")}
              </li>
              <li className="hover:text-green-400 transition">
                {t("services.transformation")}
              </li>
              <li className="hover:text-green-400 transition">
                {t("services.export")}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              {t("contact.title")}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{t("contact.address")}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:hello@chibaraf.com"
                  className="hover:text-green-400 transition"
                >
                  {t("contact.email")}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>{t("contact.phone")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
