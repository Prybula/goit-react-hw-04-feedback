import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const onFeedbackBtnClick = option => {
    setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    let total = state.good + state.neutral + state.bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let percentage = (state.good / countTotalFeedback()) * 100;
    if (!percentage) {
      return 0;
    }
    return Math.round(percentage);
  };

  
    return (
      <div
        style={{
          fontSize: 40,
          color: '#020202',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={onFeedbackBtnClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }


export default App;
