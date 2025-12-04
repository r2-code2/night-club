import "./typography.css";

const truncateWords = (text, wordLimit) => {
  if (!text || !wordLimit) return text;
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

export const HeadingXL = ({ text, color }) => (
  <h1 style={{ fontSize: "var(--step-5)" }} className={`uppercase font-bold ${color}`}>
    {text}
  </h1>
);
export const HeadingMain = ({ text, color }) => (
  <h1 style={{ fontSize: "var(--step-4)" }} className={`gradient-underline-lg text-center medium uppercase tracking-wider ${color}`}>
    {text}
  </h1>
);
export const HeadingSecondary = ({ text, color }) => (
  <h2 style={{ fontSize: "var(--step-3)" }} className={`uppercase ${color}`}>
    {text}
  </h2>
);
export const Subheading = ({ text, color }) => (
  <h3 style={{ fontSize: "var(--step-2)" }} className={`${color}`}>
    {text}
  </h3>
);

export const HeroSubheading = ({ text, color }) => (
  <h3
    style={{ fontSize: "var(--step--2)" }}
    className={`uppercase tracking-[0.8125rem] ${color}`}>
    {text}
  </h3>
);
export const Caption = ({ text, color,  wordLimit }) => (
  <span
    style={{ fontSize: "var(--step--1)" }}
    className={`${color}`}>
    {truncateWords(text, wordLimit)}
  </span>
);

const Typography = ({ children }) => <>{children}</>;

export default Typography;
