import { useState } from "react";
import classNames from "./utils/classNames";
import { ghostData, evidences, ghosts, GhostEnum, EvidenceEnum } from "./data";

const App: React.FC = () => {
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
    if (!isPossibleGhost(currentGhost)) return;

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
    <main className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-2xl md:text-3xl font-black text-stone-900 mt-12'>
        Phasmophobia Journal
      </h1>

      <div className='max-w-md w-full px-4 my-12'>
        <span className='text-xl font-bold'>Evidence</span>

        <hr className='border-b border-stone-900 my-4' />

        <div className='flex flex-wrap gap-y-4 md:gap-4'>
          {evidences.map((evidence) => (
            <div key={evidence} className='flex w-36 grow'>
              <label className='flex items-center gap-2 md:gap-3 cursor-pointer'>
                <input
                  type='checkbox'
                  value={evidence}
                  className='appearance-none w-4 h-4 md:w-6 md:h-6 border-2 md:border-[3px] checked:bg-stone-900 border-stone-900 cursor-pointer'
                  onChange={handleEvidencesChange(evidence)}
                  checked={trueEvidences.includes(evidence)}
                />
                <span
                  className={classNames(
                    "md:text-lg font-medium whitespace-nowrap select-none",
                    falseEvidences.includes(evidence) && "line-through"
                  )}
                >
                  {evidence}
                </span>
              </label>
            </div>
          ))}
        </div>

        <hr className='border-b border-stone-900 my-4' />

        <p className='md:text-lg text-center mb-4'>
          The ghost type could still be one of these.
        </p>

        <div className='grid grid-cols-3 gap-3 text-center'>
          {ghosts.map((ghost) => (
            <span
              key={ghost}
              className={classNames(
                "md:text-lg font-medium border-2 border-transparent rounded-[45%] cursor-pointer select-none",
                selectedGhost === ghost && "!border-stone-900",
                falseGhosts.includes(ghost) && "line-through",
                !isPossibleGhost(ghost) && "opacity-20"
              )}
              onClick={handleGhostSelect(ghost)}
            >
              {ghost}
            </span>
          ))}
        </div>

        <p className='md:text-lg text-center my-4 max-w-xs mx-auto'>
          Using the evidence were found, we believe the ghost is a
        </p>

        <div className='flex justify-center items-center'>
          <span className='text-3xl p-2 md:p-4'>
            {selectedGhost || "Not yet discovered"}
          </span>
        </div>
      </div>
    </main>
  );
};

export default App;
