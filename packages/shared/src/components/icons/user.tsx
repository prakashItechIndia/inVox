import TickCircle from '../../assets/icons/tick-circle.svg?react';
import ReactSortIcons from '../../assets/icons/Arrow Sort.svg?react';
import ReactAddIcons from '../../assets/icons/add.svg?react';

import { CustomSVGIconType } from '../../type';

export const ReactTickCircle: CustomSVGIconType = ({ className, variant }) => {
  return <TickCircle className={className}
    style={{ fill: variant === 'on' ? 'text-green-500' : 'text-red-500' }}
  />;
};

export const ReactSortIcon: CustomSVGIconType = ({ className }) => {
  return <ReactSortIcons className={className} />;
};

export const ReactAddIcon: CustomSVGIconType = ({ className }) => {
  return <ReactAddIcons className={className} />;
};

export const ReactExportIcon: CustomSVGIconType = ({ className }) => {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5.5 15H14.5C14.7761 15 15 15.2239 15 15.5C15 15.7455 14.8231 15.9496 14.5899 15.9919L14.5 16H5.5C5.22386 16 5 15.7761 5 15.5C5 15.2545 5.17688 15.0504 5.41012 15.0081L5.5 15H14.5H5.5ZM9.91012 3.00806L10 3C10.2455 3 10.4496 3.17688 10.4919 3.41012L10.5 3.5V12.292L13.182 9.61091C13.3555 9.43735 13.625 9.41806 13.8198 9.55306L13.8891 9.61091C14.0627 9.78448 14.0819 10.0539 13.9469 10.2488L13.8891 10.318L10.3536 13.8536C10.18 14.0271 9.91056 14.0464 9.71569 13.9114L9.64645 13.8536L6.11091 10.318C5.91565 10.1228 5.91565 9.80617 6.11091 9.61091C6.28448 9.43735 6.5539 9.41806 6.74877 9.55306L6.81802 9.61091L9.5 12.292V3.5C9.5 3.25454 9.67688 3.05039 9.91012 3.00806L10 3L9.91012 3.00806Z" fill="#242424" />
  </svg>;
};
