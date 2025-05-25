import css from "./Feedback.module.css";

export default function Feedback({ feedback, totalFeedback, positive }) {
  return (
    <ul className={css.feedback}>
      {Object.entries(feedback).map(([key, value]) => {
        return (
          <li key={key} className={css.feedbackItem}>
            <p className={css.feedbackTitle}>{key}:</p>
            <span>{value}</span>
          </li>
        );
      })}
      <li key="total" className={css.feedbackItem}>
        <p className={css.feedbackTitle}>Total:</p>
        <span>{totalFeedback}</span>
      </li>
      <li key="positive" className={css.feedbackItem}>
        <p className={css.feedbackTitle}>Positive:</p>
        <span>{positive}%</span>
      </li>
    </ul>
  );
}