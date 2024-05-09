import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";

export default function SearchBar({query, handleSearch,placeHolder}: {query: any, handleSearch: any,placeHolder:string}){
  return (
      <Input
        value={query}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value.toString())}
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90 w-[240] h-[160]",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
            "rounded-2xl",
          ],
          
        }}
        placeholder={placeHolder}
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
  );
}
