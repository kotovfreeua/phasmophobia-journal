import { Link } from "react-router-dom";
import Bookmark from "../NavLink";

interface Props {
  children: React.ReactNode;
}

const BookWrapper: React.FC<Props> = ({ children }) => (
  <div className='h-full mb-20'>
    <nav className='flex flex-row-reverse w-full mx-auto max-w-[28rem] sm:max-w-[32rem] lg:max-w-[64rem] pl-5 pr-1 pt-16'>
      <Bookmark className='!ml-auto'>EN</Bookmark>

      <Link to='/about'>
        <Bookmark>About</Bookmark>
      </Link>
      <Link to='/ghosts'>
        <Bookmark className='lg:hidden'>Ghosts</Bookmark>
      </Link>
      <Link to='/'>
        <Bookmark>Evidence</Bookmark>
      </Link>
    </nav>
    <div className='flex justify-center items-center'>{children}</div>
  </div>
);

export default BookWrapper;
