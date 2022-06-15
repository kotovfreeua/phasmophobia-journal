import { useTranslation } from "react-i18next";
import AuthorSection from "@/components/AuthorSection";
import BookPage from "@/components/BookPage";
import Hr from "@/components/Hr";

const AuthorPage: React.FC = () => {
  const [t] = useTranslation();

  return (
    <BookPage className='page-pattern'>
      <span className='text-4xl sm:text-[2.5rem] text-center font-bold tracking-wider md:hidden'>
        {t("Phasmophobia Journal")}
      </span>

      <Hr className='md:hidden my-8' />

      <AuthorSection />
    </BookPage>
  );
};

export default AuthorPage;
