import classNames from "../utils/classNames";

interface Props {
  label: string;
  checked: boolean;
  crossedOut: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<Props> = ({ label, checked, crossedOut, onChange }) => (
  <label className='flex items-center gap-2 sm:gap-3 cursor-pointer'>
    <input
      type='checkbox'
      className='appearance-none w-4 h-4 sm:w-5 sm:h-5 border-2 sm:border-[2.5px] rounded-[2px] checked:bg-stone-900 border-stone-900 cursor-pointer'
      onChange={onChange}
      checked={checked}
    />
    <span
      className={classNames(
        "text-lg sm:text-2xl leading-5 sm:leading-6 tracking-wider font-medium whitespace-nowrap select-none",
        crossedOut && "line-through"
      )}
    >
      {label}
    </span>
  </label>
);

export default Checkbox;
