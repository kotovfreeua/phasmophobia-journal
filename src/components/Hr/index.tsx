import classNames from "../../utils/classNames";

interface Props {
  className?: string;
}

const Hr: React.FC<Props> = ({ className }) => (
  <hr
    className={classNames("border-b-2 border-stone-900 my-2 rounded-[35%]", className)}
  />
);

export default Hr;
