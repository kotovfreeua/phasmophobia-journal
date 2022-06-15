import { ReactComponent as BookmarkLeft } from "@/assets/svg/bookmark-left.svg";
import { ReactComponent as BookmarkRight } from "@/assets/svg/bookmark-right.svg";
import classNames from "@/utils/classNames";

interface Props {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Bookmark: React.FC<Props> = ({ className, onClick, children }) => (
  <div
    className={classNames(
      "flex -ml-4 drop-shadow-[0_10px_10px_rgb(0_0_0_/0.25)] translate-y-[3px]",
      className
    )}
    onClick={onClick}
  >
    <BookmarkLeft className='h-[30px] sm:h-auto w-auto' />
    <div className='flex justify-center items-center h-[30px] sm:h-[36px] bg-gradient-to-b from-[#FBEBAF] to-[#EBD69A] px-3 sm:px-6 text-[1.25rem] -mx-[0.5px] rounded-[1px_0px_0px_1px] sm:text-2xl whitespace-nowrap'>
      {children}
    </div>
    <BookmarkRight className='h-[30px] sm:h-auto w-auto' />
  </div>
);

export default Bookmark;
