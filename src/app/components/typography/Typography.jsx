import "./typography.css";

export const HeadingXL = ({ text, color }) => (
  <h1 style={{ fontSize: "var(--step-5)" }} className={`uppercase font-bold ${color}`}>
    {text}
  </h1>
);
export const HeadingMain = ({ text, color }) => (
  <h1 style={{ fontSize: "var(--step-4)" }} className={`uppercase tracking-wider ${color}`}>
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
export const Caption = ({ text, color }) => (
  <span style={{ fontSize: "var(--step--1)" }} className={`${color}`}>
    {text}
  </span>
);

const Typography = ({ children }) => <>{children}</>;

export default Typography;
