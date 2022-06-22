import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Bookmark from "@/components/Bookmark";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface Props {
  children: React.ReactNode;
}

const BookWrapper: React.FC<Props> = ({ children }) => {
  const [t] = useTranslation();

  return (
    <div className='h-full mb-4 sm:mb-0'>
      <nav className='flex flex-row-reverse w-full mx-auto max-w-[28rem] sm:max-w-[32rem] lg:max-w-[64rem] pl-5 pr-1 pt-4 sm:pt-16'>
        <LanguageSwitcher />

        <Link to='/info'>
          <Bookmark>{t("Info")}</Bookmark>
        </Link>
        <Link to='/ghosts' className='lg:hidden'>
          <Bookmark>{t("Ghost Types.nav")}</Bookmark>
        </Link>
        <Link to='/'>
          <Bookmark>{t("Evidence.nav")}</Bookmark>
        </Link>
      </nav>
      <div className='flex justify-center items-center'>{children}</div>
    </div>
  );
};

export default BookWrapper;
