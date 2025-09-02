import { CustomSVGIconType } from '../../type';
import ReactIconLock from '../../assets/icons/Lock.svg?react';
import ReactIconDown from '../../assets/icons/down.svg?react';
import ReactIconCalendar from '../../assets/icons/calendar.svg?react';
import ReactIconPlusAdd from '../../assets/icons/plus-add.svg?react';
import ReactIconCheck from '../../assets/icons/check.svg?react';

export const ReactLockLogo: CustomSVGIconType = ({ className }) => {
  return <ReactIconLock className={className} />;
};

export const ReactDownLogo: CustomSVGIconType = ({
  className,
  variant,
  onClick,
}) => {
  return (
    <ReactIconDown
      className={className}
      style={{ fill: variant === 'on' ? 'black' : '#A8B8B4' }}
      onClick={() => {
        onClick && onClick();
      }}
    />
  );
};

export const ReactCalendarLogo: CustomSVGIconType = ({ className }) => {
  return <ReactIconCalendar className={className} />;
};

export const ReactPlusAddLogo: CustomSVGIconType = ({ className, onClick }) => {
  return <ReactIconPlusAdd className={className} onClick={onClick} />;
};

export const ReactCheckLogo: CustomSVGIconType = ({ className }) => {
  return <ReactIconCheck className={className} />;
};
