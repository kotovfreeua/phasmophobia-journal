import { useTranslation } from "react-i18next";
import { langs, langLabels } from "@/locales";
import Bookmark from "@/components/Bookmark";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const currentlang =
    langLabels.find((lang) => lang.includes(i18n.language.split("-")[0])) || "en";

  const handleSwitcherChange = () => {
    const nextLangId = (langLabels.indexOf(currentlang) + 1) % langLabels.length;

    i18n.changeLanguage(langLabels[nextLangId]);
  };

  return (
    <Bookmark
      className='!ml-auto cursor-pointer select-none'
      onClick={handleSwitcherChange}
    >
      {langs[currentlang]}
    </Bookmark>
  );
};

export default LanguageSwitcher;
