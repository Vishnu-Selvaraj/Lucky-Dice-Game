interface ToggleBtnProps {
  theme: string;
  toggleTheme: () => void;
}

const ToggleBtn = ({ toggleTheme, theme }: ToggleBtnProps) => {
  return (
    <div className="absolute right-10 -bottom-15">
      <div
        className={` ${
          theme === "light" ? "bg-gray-100" : "dark:bg-gray-800"
        } w-12 h-12 rounded-[50%] p-3 flex justify-center shadow-lg animate-bounce hover:cursor-pointer`}
        onClick={toggleTheme}
      >
        <span className="scale-125">{theme === "light" ? "🌙" : "🔆"}</span>
      </div>
    </div>
  );
};

export default ToggleBtn;
