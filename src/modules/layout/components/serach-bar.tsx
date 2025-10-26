import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);

    //unmount
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <>
      <button
        className="relative flex flex-1 cursor-text items-center justify-between self-stretch rounded bg-zinc-900 px-4 py-2 text-gray-500 transition hover:bg-zinc-800 hover:text-gray-200 focus-visible:bg-zinc-700  focus-visible:text-zinc-200 overflow-hidden "
        onClick={() => setOpen(true)}
      >
        <span className="inline-flex flex-1 items-center">
          <Search size={16} className="mr-2" />
          <span className="text-xs text-left">Serach</span>
        </span>
        <span>
          <kbd className="px-1 py-0.5 text-xs bg-zinc-700 rounded">Ctrl</kbd>
          <kbd className="px-1 py-0.5 text-xs bg-zinc-700 rounded">K</kbd>
        </span>
      </button>
    </>
  );
};

export default SearchBar;
