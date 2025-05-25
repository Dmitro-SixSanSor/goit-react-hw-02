import React, { useState } from 'react'
import Feedback from './components/Feedback'
import Options from './components/Options'
import Notification from './components/Notification'

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const updateFeedback = (type) => {
    setFeedback(prev => ({ ...prev, [type]: prev[type] + 1 }))
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 })
  }

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>

      <Options
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={resetFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positivePercentage={Math.round((feedback.good / totalFeedback) * 100)}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  )
}

export default App