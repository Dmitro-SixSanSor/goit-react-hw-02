import css from "./Options.module.css";

export default function Options({ options, updateFunction, totalFeedback }) {
  return (
    <div className={css.btnWrapper}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => updateFunction(option)}
          className={css.btn}
        >
          {option}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={() => updateFunction("reset")} className={css.btn}>
          Reset
        </button>
      )}
    </div>
  );
}