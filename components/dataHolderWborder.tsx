import React from 'react';

const DataHolder_Wborder = ({ borderHeaderText, inside_text } : {borderHeaderText: any, inside_text: any} ) => {
  return (
    <div className='pr-12 pl-12'>
      <div id="headerText" className="relative bg-[#FFF] text-center z-1000 w-[205px] mx-[auto] my-[0] font-bold">
        {borderHeaderText}
      </div>
      <div id="insideText" className="p-[20px] border-[1px] border-[solid] border-[#DDDDDD] rounded-lg -mt-[10px]">
        {inside_text}
      </div>
    </div>
  );
};

export default DataHolder_Wborder;
