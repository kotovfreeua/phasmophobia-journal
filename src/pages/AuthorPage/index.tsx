import AuthorSection from "@/components/AuthorSection";
import BookPage from "@/components/BookPage";
import Hr from "@/components/Hr";

const AuthorPage: React.FC = () => (
  <BookPage className='page-pattern'>
    <span className='text-5xl text-center font-bold tracking-wider md:hidden'>
      Phasmophobia Journal
    </span>

    <Hr className='md:hidden my-8' />

    <AuthorSection />
  </BookPage>
);

export default AuthorPage;
