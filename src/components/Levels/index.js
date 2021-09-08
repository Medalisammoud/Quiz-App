import React, { useEffect, useState } from "react";
import Stepper from "react-stepper-horizontal";

const Levels = ({ levelName, quizLevel }) => {
  const [levels, setLevels] = useState([]);
  useEffect(() => {
    setLevels(levelName.map((level) => ({ title: level.toUpperCase() })));
  }, [levelName]);
  return (
    <div className="levelsContainer">
      <Stepper
        steps={levels}
        activeStep={quizLevel}
        circleTop={0}
        activeTitleColor={"#d31017"}
        activeColor={"#d31017"}
        completeTitleColor={"#E0E0E0"}
        defaultTitleColor={"#E0E0E0"}
        completeColor={"#E0E0E0"}
        completeBarColor={"#E0E0E0"}
        barStyle={"dashed"}
        size={45}
        circleFontSize={20}
      />
    </div>
  );
};

export default React.memo(Levels);
