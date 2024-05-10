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


// import React, {forwardRef} from "react";
// import {useInput} from "@nextui-org/react";
// import { SearchIcon } from "./SearchIcon";
// import {CloseFilledIcon} from "./closeIcon";

// const styles = {
//   label: "text-black/50 dark:text-white/90",
//   input: [
//     "bg-transparent",
//     "text-black/90 dark:text-white/90",
//     "placeholder:text-default-700/50 dark:placeholder:text-white/60",
//   ],
//   innerWrapper: "bg-transparent",
//   inputWrapper: [
//     "bg-default-200/50",
//     "dark:bg-default/60",
//     "backdrop-blur-xl",
//     "backdrop-saturate-200",
//     "hover:bg-default-200/70",
//     "dark:hover:bg-default/70",
//     "group-data-[focused=true]:bg-default-200/50",
//     "dark:group-data-[focused=true]:bg-default/60",
//     "!cursor-text",
//     "rounded-2xl",
//   ],
// };

// const MyInput = forwardRef((props, ref) => {
//   const {
//     Component,
//     label,
//     domRef,
//     description,
//     isClearable,
//     startContent,
//     endContent,
//     shouldLabelBeOutside,
//     shouldLabelBeInside,
//     errorMessage,
//     getBaseProps,
//     getLabelProps,
//     getInputProps,
//     getInnerWrapperProps,
//     getInputWrapperProps,
//     getDescriptionProps,
//     getErrorMessageProps,
//     getClearButtonProps,
//   } = useInput({
//     ...props,
//     ref,
//     // this is just for the example, the props bellow should be passed by the parent component
//     label: "Search",
//     type: "search",
//     placeholder: "Type to search...",
//     startContent: (
//       <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
//     ),
//     // custom styles
//     classNames: {
//       ...styles,
//     },
//   });

//   const labelContent = <label {...getLabelProps()}>{label}</label>;

//   const end = React.useMemo(() => {
//     if (isClearable) {
//       return <span {...getClearButtonProps()}>{endContent || <CloseFilledIcon />}</span>;
//     }

//     return endContent;
//   }, [isClearable, getClearButtonProps]);

//   const innerWrapper = React.useMemo(() => {
//     if (startContent || end) {
//       return (
//         <div {...getInnerWrapperProps()}>
//           {startContent}
//           <input {...getInputProps()} />
//           {end}
//         </div>
//       );
//     }

//     return <input {...getInputProps()} />;
//   }, [startContent, end, getInputProps, getInnerWrapperProps]);

//   return (
//     <div className="w-[340px] h-[300px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
//       <Component {...getBaseProps()}>
//         {shouldLabelBeOutside ? labelContent : null}
//         <div
//           {...getInputWrapperProps()}
//           role="button"
//           onClick={() => {
//             domRef.current?.focus();
//           }}
//         >
//           {shouldLabelBeInside ? labelContent : null}
//           {innerWrapper}
//         </div>
//         {description && <div {...getDescriptionProps()}>{description}</div>}
//         {errorMessage && <div {...getErrorMessageProps()}>{errorMessage}</div>}
//       </Component>
//     </div>
//   );
// });

// MyInput.displayName = "MyInput";

// export default MyInput;