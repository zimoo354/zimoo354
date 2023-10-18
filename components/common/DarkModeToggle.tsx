"use client";

export const DarkModeToggle = () => {
  const toggleDarkmode = () => {
    const classes = Array.from(document.documentElement.classList);
    const documentClasses = classes;
    if (documentClasses.includes("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <button
      className="fixed top-2 left-2 py-4 px-12 bg-slate-100 text-slate-900 z-50"
      onClick={toggleDarkmode}
    >
      Toggle Darkmode
    </button>
  );
};
