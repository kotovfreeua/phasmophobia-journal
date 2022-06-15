import en from "./en/common.json";
import ru from "./ru/common.json";
import uk from "./uk/common.json";

export const langs = {
  en: "EN",
  ru: "РУ",
  uk: "УКР"
};

export const langLabels = Object.keys(langs) as (keyof typeof langs)[];

export default { en, ru, uk };
