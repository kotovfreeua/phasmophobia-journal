import { useTranslation } from "react-i18next";

const NotFoundPage: React.FC = () => {
  const [t] = useTranslation();

  return (
    <section className='flex justify-center items-center h-screen'>
      <span className='text-4xl sm:text-6xl text-white text-center'>
        404 - {t("No ghosts here")}
      </span>
    </section>
  );
};

export default NotFoundPage;
