import Icon from './Icon';
import userIcon from '../assets/images/user-img.png'; // Next.js gestionará la imagen automáticamente

const UserIcon = () => {
  return (
    <Icon icon={userIcon} alt="User Icon" />
  );
};

export default UserIcon;