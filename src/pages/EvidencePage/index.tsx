import { useState } from "react";
import { useTranslation } from "react-i18next";
import BookPage from "@/components/BookPage";
import Checkbox from "@/components/Checkbox";
import Hr from "@/components/Hr";
import { data, evidences, ghosts, GhostEnum, EvidenceEnum } from "@/data/ghosts";
import classNames from "@/utils/classNames";

const EvidencePage: React.FC = () => {
  const [trueEvidences, setTrueEvidences] = useState<EvidenceEnum[]>([]);
  const [falseEvidences, setFalseEvidences] = useState<EvidenceEnum[]>([]);
  const [selectedGhost, setSelectedGhost] = useState<GhostEnum | null>(null);
  const [falseGhosts, setFalseGhosts] = useState<GhostEnum[]>([]);

  const [t] = useTranslation();

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
    trueEvidences.every((evidence) => data[ghostName].evidence.includes(evidence)) &&
    !falseEvidences.some((evidence) => data[ghostName].evidence.includes(evidence));

  return (
    <BookPage className='page-pattern'>
      <span className='text-4xl sm:text-[2.5rem] leading-9 font-medium tracking-wider'>
        {t("Evidence.heading")}
      </span>

      <Hr />

      <div className='flex flex-wrap gap-y-4 py-2 sm:py-3 sm:gap-5'>
        {evidences.map((evidence) => (
          <div key={evidence} className='flex w-36 sm:w-40 grow'>
            <Checkbox
              label={t(`evidences.${evidence}`)}
              checked={trueEvidences.includes(evidence)}
              crossedOut={falseEvidences.includes(evidence)}
              onChange={handleEvidencesChange(evidence)}
            />
          </div>
        ))}
      </div>

      <Hr />

      <p className='text-xl sm:text-2xl leading-6 sm:leading-6 text-center my-2 sm:mt-2 mb-4 max-w-xs sm:max-w-sm mx-auto'>
        {t("Using the evidence were found, we believe the ghost is a")}
      </p>

      <div className='grid grid-cols-3 gap-x-3 text-center'>
        {ghosts.map((ghost) => (
          <button
            key={ghost}
            className={classNames(
              "relative flex items-center justify-center text-[1.35rem] sm:text-2xl leading-6 whitespace-nowrap before:absolute before:w-full before:h-full before:border-[3px] before:border-transparent before:rounded-[50%] cursor-pointer select-none py-1 disabled:cursor-auto z-10",
              selectedGhost === ghost && "before:!border-stone-900",
              falseGhosts.includes(ghost) && "crossed-out",
              !isPossibleGhost(ghost) && "opacity-20"
            )}
            onClick={handleGhostSelect(ghost)}
            disabled={!isPossibleGhost(ghost)}
          >
            {t(`ghosts.${ghost}`)}
          </button>
        ))}
      </div>
    </BookPage>
  );
};

export default EvidencePage;
