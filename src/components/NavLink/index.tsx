import classNames from "../../utils/classNames";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const BookmarkLeftSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    height='36'
    viewBox='0 0 32 84'
    fill='none'
    className={className}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0 67V84L32 84V0C28 1 22 9 19 32C16 53 6 65 0 67Z'
      fill='url(#paint0_linear_5_6)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_5_6'
        x1='16'
        y1='0'
        x2='16'
        y2='84'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FBEBAF' />
        <stop offset='1' stopColor='#EBD69A' />
      </linearGradient>
    </defs>
  </svg>
);

const BookmarkRightSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    height='36'
    viewBox='0 0 33 84'
    fill='none'
    className={className}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16 38C14 20 10 0 0 0V86L33 86V70C29 69 18 59 16 38Z'
      fill='url(#paint0_linear_1_3)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_1_3'
        x1='17'
        y1='0'
        x2='17'
        y2='84'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FBEBAF' />
        <stop offset='1' stopColor='#EBD69A' />
      </linearGradient>
    </defs>
  </svg>
);

const Bookmark: React.FC<Props> = ({ className, children }) => (
  <div className={classNames("flex -ml-4 drop-shadow-2xl", className)}>
    <BookmarkLeftSVG className='h-[30px] sm:h-auto w-auto' />
    <div className='flex justify-center items-center h-[30px] sm:h-[36px] bg-gradient-to-b from-[#FBEBAF] to-[#EBD69A] px-4 sm:px-6 text-[1.25rem] -mx-[0.5px] rounded-[1px_0px_0px_1px] sm:text-2xl'>
      {children}
    </div>
    <BookmarkRightSVG className='h-[30px] sm:h-auto w-auto' />
  </div>
);

export default Bookmark;