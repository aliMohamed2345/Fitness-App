"use client";
import { IoSearch } from "react-icons/io5";
import Modal from "./Modal";
const SearchBar = ({
  setSearchQuery,
  searchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {

  return (
    <div className="flex items-center gap-3 w-full">
      <Modal />
      <div className="flex items-center border border-border bg-card shadow-card transition-all hover:border-primary overflow-hidden rounded-full w-full">
        <button className="flex items-center justify-center rounded-l-full borer border-border bg-primary p-2.5 shadow-card text-primary-foreground cursor-pointer transition-all duration-300 hover:brightness-110">
          <IoSearch size={20} />
        </button>
        <input
          className="w-full bg-transparent px-4 py-2 outline-none border-none text-foreground placeholder:text-muted-foreground  "
          type="text"
          placeholder="Search by exercise name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
