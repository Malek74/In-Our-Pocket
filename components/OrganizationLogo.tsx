// MySvgComponent.js or MySvgComponent.tsx
import React from 'react';

const OrganizationLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height= "4em" viewBox="0 0 24 24" stroke="gray" fill='gray' >
      {/* Optional: Remove the <rect> element */}
      {/* <rect x="0" fill="#8492a6" width="24" height="24"/> */}

      <g>
        <path d="M2 19h20v3H2zM12 2L2 6v2h20V6M17 10h3v7h-3zM10.5 10h3v7h-3zM4 10h3v7H4z"/>
      </g>
    </svg>
  );
};

export default OrganizationLogo;
