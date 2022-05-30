import { Link } from "react-router-dom";
import Hr from "@/components/Hr";
import BookPage from "@/components/BookPage";
import { ghosts } from "@/data/ghosts";
import toKebabCase from "@/utils/toKebabCase";

const GhostTypesPage: React.FC = () => (
  <BookPage>
    <span className='text-5xl leading-9 font-medium tracking-wider'>Ghost Types</span>

    <Hr />

    <p className='text-xl sm:text-2xl leading-6 sm:leading-6 tracking-wider mt-6 mb-4 max-w-sm sm:max-w-md'>
      Select a ghost type below to view more information:
    </p>

    <ul className='flex flex-col flex-wrap h-[27rem] sm:h-[30rem] gap-2'>
      {ghosts.map((ghostName, i) => (
        <li
          key={ghostName}
          className='mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer'
        >
          <Link to={`/ghosts/${toKebabCase(ghostName)}`}>
            {i + 1}. {ghostName}
          </Link>
        </li>
      ))}
    </ul>
  </BookPage>
);

export default GhostTypesPage;
