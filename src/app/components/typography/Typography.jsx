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
  <h1
    style={{ fontSize: "var(--step-5)" }}
    className={`uppercase font-bold ${color}`}>
    {text}
  </h1>
);
export const HeadingMain = ({ text, color }) => (
  <h1
    style={{ fontSize: "var(--step-4)" }}
    className={` gradient-underline-lg text-center medium uppercase tracking-wider ${color}`}>
    {text}
  </h1>
);
export const HeadingSecondary = ({ text, color }) => (
  <h2
    style={{ fontSize: "var(--step-3)" }}
    className={`uppercase ${color}`}>
    {text}
  </h2>
);

export const HeadingTertiary = ({ text, color }) => (
  <h2
    style={{ fontSize: "var(--step-1)" }}
    className={`uppercase ${color}`}>
    {text}
  </h2>
);
export const Subheading = ({ text, color }) => (
  <h4
    style={{ fontSize: "var(--step-2)" }}
    className={`${color}`}>
    {text}
  </h4>
);

export const BannerText = ({ text, color }) => (
  <h4
    style={{ fontSize: "var(--step-0)" }}
    className={`${color}`}>
    {text}
  </h4>
);

export const HeroSubheading = ({ text, color }) => (
  <h3
    style={{ fontSize: "var(--step--2)" }}
    className={`uppercase md:text-4xl tracking-[0.8125em] md:tracking-[1.2rem] transition-all transition-discrete ${color}`}>
    {text}
  </h3>
);
export const Caption = ({ text, color, wordLimit }) => (
  <span
    style={{ fontSize: "var(--step--1)" }}
    className={`${color} leading-[180%]`}>
    {truncateWords(text, wordLimit)}
  </span>
);

const Typography = ({ children }) => <>{children}</>;

export default Typography;
