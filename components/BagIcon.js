import Icon from './Icon';
import bagIcon from '../assets/images/bag-img.png'; // Next.js gestionará la imagen automáticamente

const BagIcon = () => {
  return (
    <Icon icon={bagIcon} altText="User Icon" />
  );
};

export default BagIcon;