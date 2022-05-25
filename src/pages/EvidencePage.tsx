import { useState } from "react";
import classNames from "../utils/classNames";
import { ghostData, evidences, ghosts, GhostEnum, EvidenceEnum } from "../data";
import Page from "../components/Page";
import Checkbox from "../components/Checkbox";
import Hr from "../components/Hr";

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
    <Page>
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

      <p className='text-xl sm:text-2xl leading-6 sm:leading-6 tracking-wider text-center my-4 max-w-xs sm:max-w-sm mx-auto'>
        Using the evidence were found, we believe the ghost is a
      </p>

      <div className='grid grid-cols-3 gap-x-3 text-center'>
        {ghosts.map((ghost) => (
          <button
            key={ghost}
            className={classNames(
              "relative flex items-center justify-center text-[1.35rem] sm:text-2xl leading-6 tracking-wider whitespace-nowrap before:absolute before:w-full before:h-full before:border-[3px] before:border-transparent before:rounded-[50%] cursor-pointer select-none py-2 hover-marker z-10",
              selectedGhost === ghost && "before:!border-stone-900",
              falseGhosts.includes(ghost) && "crossed-out",
              !isPossibleGhost(ghost) && "opacity-20"
            )}
            onClick={handleGhostSelect(ghost)}
            disabled={!isPossibleGhost(ghost)}
          >
            {ghost}
          </button>
        ))}
      </div>
    </Page>
  );
};

export default EvidencePage;
