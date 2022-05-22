import { useState } from "react";
import Checkbox from "../components/Checkbox";
import Hr from "../components/Hr";
import classNames from "../utils/classNames";
import { ghostData, evidences, ghosts, GhostEnum, EvidenceEnum } from "../data";

const EvidencePage: React.FC = () => {
  const [trueEvidences, setTrueEvidences] = useState<EvidenceEnum[]>([]);
  const [falseEvidences, setFalseEvidences] = useState<EvidenceEnum[]>([]);
  const [selectedGhost, setSelectedGhost] = useState<GhostEnum | null>(null);
  const [falseGhosts, setFalseGhosts] = useState<GhostEnum[]>([]);

  const handleEvidencesChange = (currentEvidence: EvidenceEnum) => () => {
    if (trueEvidences.includes(currentEvidence)) {
      setTrueEvidences(trueEvidences.filter((evidence) => evidence !== currentEvidence));
      setFalseEvidences([...falseEvidences, currentEvidence]);
      return;
    }

    if (falseEvidences.includes(currentEvidence)) {
      setFalseEvidences(
        falseEvidences.filter((evidence) => evidence !== currentEvidence)
      );
      return;
    }

    setTrueEvidences([...trueEvidences, currentEvidence]);
  };

  const handleGhostSelect = (currentGhost: GhostEnum) => () => {
    if (selectedGhost === currentGhost) {
      setSelectedGhost(null);
      setFalseGhosts([...falseGhosts, currentGhost]);
      return;
    }

    if (falseGhosts.includes(currentGhost)) {
      setFalseGhosts(falseGhosts.filter((ghost) => ghost !== currentGhost));
      return;
    }

    setSelectedGhost(currentGhost);
  };

  const isPossibleGhost = (ghostName: GhostEnum) =>
    trueEvidences.every((evidence) => ghostData[ghostName].evidence.includes(evidence)) &&
    !falseEvidences.some((evidence) => ghostData[ghostName].evidence.includes(evidence));

  return (
    <div className='bg-[#fefcdb] text-stone-900 max-w-md sm:max-w-lg w-full px-4 md:px-10 py-12 rounded-[2px_3px]'>
      <span className='text-4xl leading-9 font-medium tracking-wider'>Evidence</span>

      <Hr />

      <div className='flex flex-wrap gap-y-4 sm:gap-5'>
        {evidences.map((evidence) => (
          <div key={evidence} className='flex w-36 sm:w-40 grow'>
            <Checkbox
              label={evidence}
              checked={trueEvidences.includes(evidence)}
              crossedOut={falseEvidences.includes(evidence)}
              onChange={handleEvidencesChange(evidence)}
            />
          </div>
        ))}
      </div>

      <Hr />

      <p className='text-xl sm:text-2xl leading-6 sm:leading-6 tracking-wider text-center my-4 max-w-xs md:max-w-sm mx-auto'>
        Using the evidence were found, we believe the ghost is a
      </p>

      <div className='grid grid-cols-3 gap-x-3 text-center'>
        {ghosts.map((ghost) => (
          <button
            key={ghost}
            className={classNames(
              "text-2xl leading-6 tracking-wider whitespace-nowrap border-[3px] border-transparent rounded-[50%] cursor-pointer select-none py-2",
              selectedGhost === ghost && "!border-stone-900",
              falseGhosts.includes(ghost) && "line-through",
              !isPossibleGhost(ghost) && "opacity-20"
            )}
            onClick={handleGhostSelect(ghost)}
            disabled={!isPossibleGhost(ghost)}
          >
            {ghost}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EvidencePage;
