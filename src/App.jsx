import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";gg
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  let startData = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [state, setState] = useState(() => {
    const savedStats = JSON.parse(window.localStorage.getItem("stats"));
    if (savedStats) {
      return savedStats;
    }
    return startData;
  });

  const totalFeedback = state.good + state.neutral + state.bad;
  const positive = Math.round((state.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setState(startData);
      return;
    }
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    window.localStorage.setItem("stats", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        options={Object.keys(state)}
        updateFunction={updateFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={state}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;