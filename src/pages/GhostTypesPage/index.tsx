import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Hr from "@/components/Hr";
import BookPage from "@/components/BookPage";
import { ghosts } from "@/data/ghosts";
import toKebabCase from "@/utils/toKebabCase";

const GhostTypesPage: React.FC = () => {
  const [t] = useTranslation();

  return (
    <BookPage>
      <span className='text-3xl sm:text-[2.5rem] leading-9 font-medium whitespace-nowrap tracking-wider'>
        {t("Ghost Types.heading")}
      </span>

      <Hr />

      <p className='text-xl sm:text-2xl leading-6 sm:leading-6 tracking-wider mt-6 mb-4 max-w-sm sm:max-w-md'>
        {t("Select a ghost type below to view more information:")}
      </p>

      <ul className='flex flex-col flex-wrap h-[27rem] sm:h-[30rem] gap-2'>
        {ghosts.map((ghostName, i) => (
          <li
            key={ghostName}
            className='mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer'
          >
            <Link to={`/ghosts/${toKebabCase(ghostName)}`}>
              {i + 1}. {t(`ghosts.${ghostName}`)}
            </Link>
          </li>
        ))}
      </ul>
    </BookPage>
  );
};

export default GhostTypesPage;
