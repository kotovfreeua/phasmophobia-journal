import { Link, useParams } from "react-router-dom";
import Hr from "@/components/Hr";
import BookPage from "@/components/BookPage";
import { ghosts, data, GhostEnum } from "@/data/ghosts";
import toKebabCase from "@/utils/toKebabCase";
import toTitleCase from "@/utils/toTitleCase";

const GhostPage: React.FC = () => {
  const { ghostType } = useParams();

  if (!ghostType || !Object.values(GhostEnum).includes(toTitleCase(ghostType) as any))
    return (
      <BookPage className='page-pattern'>
        <span className='text-4xl sm:text-5xl leading-9 font-medium tracking-wider'>
          Undiscovered ghost
        </span>

        <Hr />
      </BookPage>
    );

  const ghostName = toTitleCase(ghostType) as GhostEnum;

  const nextPageUrl =
    ghosts.indexOf(ghostName) !== ghosts.length - 1 &&
    "/ghosts/" + toKebabCase(ghosts[ghosts.indexOf(ghostName) + 1]);

  return (
    <BookPage className='page-pattern'>
      <span className='text-5xl leading-9 font-medium tracking-wider'>{ghostName}</span>

      <Hr />

      <p className='text-xl sm:text-2xl leading-6 sm:leading-7 tracking-wider max-w-sm sm:max-w-[26rem] my-4'>
        {data[ghostName].description}
      </p>

      {data[ghostName].strength && (
        <p className='text-xl sm:text-2xl leading-6 sm:leading-7 tracking-wider max-w-sm sm:max-w-[26rem] my-4'>
          Strength: {data[ghostName].strength}
        </p>
      )}

      <p className='text-xl sm:text-2xl leading-6 sm:leading-7 tracking-wider max-w-sm sm:max-w-[26rem] my-4'>
        Weakness: {data[ghostName].weakness}
      </p>

      <div className='flex flex-col space-y-4 mb-4 mt-auto'>
        <span className='text-3xl sm:text-4xl leading-6 tracking-wider sm:leading-6'>
          Evidences
        </span>
        {data[ghostName].evidence.map((evidence) => (
          <span
            key={evidence}
            className='text-2xl sm:text-3xl leading-6 tracking-wider sm:leading-6'
          >
            {evidence}
          </span>
        ))}
      </div>

      {nextPageUrl && (
        <Link to={nextPageUrl} className='corner'>
          <span className='sr-only'>Next</span>
        </Link>
      )}
    </BookPage>
  );
};

export default GhostPage;
