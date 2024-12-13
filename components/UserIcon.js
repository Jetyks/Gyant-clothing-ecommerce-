import Icon from './Icon';
import userIcon from '../assets/images/user-img.png'; // Next.js gestionará la imagen automáticamente
import Link from 'next/link';

const UserIcon = () => {
  return (
    <Link href="/account">
      <Icon icon={userIcon} alt="User Icon" />
    </Link>
  );
};

export default UserIcon;