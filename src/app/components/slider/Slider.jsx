"use client";

export const SliderDot = ({ isActive, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`cursor-pointer w-4 h-4 ${isActive ? "bg-accent" : "bg-white"}`}
  />
);

export default function Slider({ currentIndex = 0, onChange }) {
  const handleClick = (index) => {
    if (onChange) onChange(index); // gør klik valgfrit
  };

  return (
    <div className="h-5 my-5 md:h-10 md:my-10 flex gap-3 justify-center">
      {/* Dot 0 */}
      <SliderDot
        isActive={currentIndex === 0}
        onClick={() => handleClick(0)}
      />

      {/* Dot 1 */}
      <SliderDot
        isActive={currentIndex === 1}
        onClick={() => handleClick(1)}
      />

      {/* Dot 2 */}
      <SliderDot
        isActive={currentIndex === 2}
        onClick={() => handleClick(2)}
      />
    </div>
  );
}
