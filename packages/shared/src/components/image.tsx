import DummyAvathar from '../assets/icons/avatarDummy.jpg';
import { cn } from '../lib';

const ProfileImage: React.FC<{
  src: string;
  className?: string;
  initials?: string;
}> = ({ src, className, initials }) => {
  return (
    <>
      <img
        className={cn(className, 'object-cover')}
        src={src}
        alt="Profile Image"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = DummyAvathar;
        }}
      />
      {initials && <span>{initials}</span>}
    </>
  );
};

export default ProfileImage;
