import classNames from "@/utils/classNames";

interface Props {
  label: string;
  checked: boolean;
  crossedOut: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<Props> = ({ label, checked, crossedOut, onChange }) => (
  <label
    className={classNames(
      "relative flex items-center gap-2 sm:gap-3 cursor-pointer after:-translate-x-[5%]",
      crossedOut && "crossed-out"
    )}
  >
    <input
      type='checkbox'
      className='appearance-none w-4 h-4 sm:w-5 sm:h-5 border-2 sm:border-[2.5px] rounded-[2px] before:block before:-translate-x-[0.1rem] md:before:-translate-x-1 before:text-[1.75rem] sm:before:text-[2.5rem] before:leading-5 before:content-["X"] before:opacity-0 checked:before:opacity-100 checked:bg-transparent border-stone-900 cursor-pointer'
      onChange={onChange}
      checked={checked}
    />
    <span className='text-lg sm:text-2xl leading-5 sm:leading-6 tracking-wider font-medium whitespace-nowrap select-none'>
      {label}
    </span>
  </label>
);

export default Checkbox;
