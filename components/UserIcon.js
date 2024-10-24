import Icon from './Icon';
import userIcon from '../assets/images/user-img.png'; // Next.js gestionará la imagen automáticamente

const UserIcon = () => {
  return (
    <Icon icon={userIcon} altText="User Icon" />
  );
};

export default UserIcon;