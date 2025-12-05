import { useState } from "react";
import Score from "../components/gamePageComp/totalScore/Score";
import NumberRow from "../components/gamePageComp/selectNumberRow/NumberRow";
import RulesSection from "../components/gamePageComp/rules/RulesSection";
import RollDices from "../components/gamePageComp/rollDices/RollDices";


const PlayGamePage = () => {
  const [showRule, setShowRule] = useState<boolean>(false);

  return (
    <>
      <div className="grid grid-cols-2 mt-10 max-lg:grid-cols-1">
        <Score />
        <NumberRow />
      </div>
      <RollDices setRuleState={setShowRule} showRule={showRule} />
      {showRule && (
        <div className="py-10 flex justify-center">
          <RulesSection />
        </div>
      )}
    </>
  );
};

export default PlayGamePage;
