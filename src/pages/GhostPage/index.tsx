import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { langLabels } from "@/locales";
import Hr from "@/components/Hr";
import BookPage from "@/components/BookPage";
import { ghosts, data, GhostEnum } from "@/data/ghosts";
import toKebabCase from "@/utils/toKebabCase";
import toTitleCase from "@/utils/toTitleCase";

const GhostPage: React.FC = () => {
  const { ghostType } = useParams();

  const [t, i18n] = useTranslation();

  const currentlang =
    langLabels.find((lang) => lang.includes(i18n.language.split("-")[0])) || "en";

  if (!ghostType || !Object.values(GhostEnum).includes(toTitleCase(ghostType) as any))
    return (
      <BookPage className='page-pattern'>
        <span className='text-4xl sm:text-4xl sm:text-[2.5rem] leading-9 font-medium tracking-wider'>
          {t("Undiscovered ghost")}
        </span>

        <Hr />
      </BookPage>
    );

  const ghostName = toTitleCase(ghostType) as GhostEnum;

  const nextPageUrl =
    ghosts.indexOf(ghostName) !== ghosts.length - 1 &&
    "/ghosts/" + toKebabCase(ghosts[ghosts.indexOf(ghostName) + 1]);

  return (
    <BookPage className='page-pattern'>
      <span className='text-4xl sm:text-[2.5rem] leading-9 font-medium tracking-wider'>
        {t(`ghosts.${ghostName}`)}
      </span>

      <Hr />

      <p className='text-xl sm:text-2xl leading-6 sm:leading-7 tracking-wider max-w-sm sm:max-w-[26rem] my-4'>
        {data[ghostName].description[currentlang]}
      </p>

      {data[ghostName].strength && (
        <p className='text-xl sm:text-2xl leading-6 sm:leading-7 tracking-wider max-w-sm sm:max-w-[26rem] my-4'>
          {t("Strength")}: {data[ghostName].strength![currentlang]}
        </p>
      )}

      <p className='text-xl sm:text-2xl leading-6 sm:leading-7 tracking-wider max-w-sm sm:max-w-[26rem] my-4'>
        {t("Weakness")}: {data[ghostName].weakness[currentlang]}
      </p>

      <div className='flex flex-col space-y-2 sm:space-y-3 mt-auto'>
        <span className='text-2xl sm:text-3xl leading-6 tracking-wider sm:leading-6'>
          {t(`Evidence.heading`)}
        </span>
        {data[ghostName].evidence.map((evidence) => (
          <span
            key={evidence}
            className='text-xl sm:text-2xl leading-6 tracking-wider sm:leading-6'
          >
            {t(`evidences.${evidence}`)}
          </span>
        ))}
      </div>

      {nextPageUrl && (
        <Link to={nextPageUrl} className='corner'>
          <span className='sr-only'>Next</span>
        </Link>
      )}
    </BookPage>
  );
};

export default GhostPage;
