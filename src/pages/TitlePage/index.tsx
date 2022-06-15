import { useTranslation } from "react-i18next";
import BookPage from "@/components/BookPage";

const TitlePage: React.FC = () => {
  const [t] = useTranslation();

  return (
    <BookPage>
      <span className='text-7xl text-center font-bold tracking-wider -rotate-3 mt-32'>
        {t("Phasmophobia Journal")}
      </span>
    </BookPage>
  );
};

export default TitlePage;
