import { useTranslation } from "react-i18next";
import { ReactComponent as TelegramIcon } from "@/assets/svg/telegram-icon.svg";
import { ReactComponent as GithubIcon } from "@/assets/svg/github-icon.svg";
import { ReactComponent as LinkedinIcon } from "@/assets/svg/linkedin-icon.svg";

const AuthorSection: React.FC = () => {
  const [t] = useTranslation();

  return (
    <div>
      <span className='text-4xl sm:text-[2.5rem] leading-9 font-medium tracking-wider'>
        {t("Author")}
      </span>

      {/* Author photo */}
      <figure className='py-8 space-y-2 rotate-2'>
        <picture className='block bg-neutral-300'>
          <source srcSet='/img/author.webp' type='image/webp' />
          <img
            className='border-8 border-white'
            src='/img/author.jpg'
            width={432}
            height={280}
            alt='Paul Kotov'
          />
        </picture>

        <figcaption className='flex justify-between'>
          <span className='text-3xl leading-10'>{t("Paul Kotov")}</span>

          <div className='flex space-x-1'>
            <a href='https://t.me/apostlekotov' target='_blank' rel='noopener noreferrer'>
              <span className='sr-only'>telegram</span>
              <TelegramIcon className='drop-shadow-[0px_2px_1px_rgba(0_0_0_/_0.15)]' />
            </a>
            <a
              href='https://github.com/apostlekotov'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='sr-only'>github</span>
              <GithubIcon className='drop-shadow-[0px_2px_1px_rgba(0_0_0_/_0.15)]' />
            </a>
            <a
              href='https://linkedin.com/in/apostlekotov'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='sr-only'>linkedin</span>
              <LinkedinIcon className='drop-shadow-[0px_2px_1px_rgba(0_0_0_/_0.15)]' />
            </a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default AuthorSection;
