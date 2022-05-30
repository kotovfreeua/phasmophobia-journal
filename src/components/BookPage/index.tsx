import classNames from "@/utils/classNames";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const BookPage: React.FC<Props> = ({ className, children }) => (
  <section className={classNames("page", className)}>{children}</section>
);

export default BookPage;
