

import classNames from 'classnames';

const Button = ({ 
  title, 
  onClick, 
  isAvailable,
  isSelected,
  hoverBorderColor,
  color, 
  hoverBgColor,
  borderColor, 
  backgroundColor 
}) => {
  const buttonClasses = classNames(
    'w-full h-full border-2 transition-opacity duration-150', 
    {
      'text-yellow-950 border-yellow-950 opacity-100': isSelected === true && isAvailable,
      'text-gray-500 border-yellow-950 opacity-45': isSelected === true && !isAvailable,
      'text-yellow-950 opacity-90 border-yellow-900': isSelected === false && isAvailable,
      'text-gray-500 opacity-45 border-yellow-900': isSelected === false && !isAvailable,
    },
    color ? `text-${color}` : '', // Aplica text color solo si se proporciona `color`
    hoverBgColor ? `hover:bg-${hoverBgColor}` : '', // Aplica hover background solo si se proporciona `hoverBgColor`
    borderColor ? `border-${borderColor}` : '', // Aplica border color solo si se proporciona `borderColor`
    backgroundColor ? `bg-${backgroundColor}` : '', // Aplica background solo si se proporciona `backgroundColor`
    hoverBorderColor ? `hover:border-${hoverBorderColor}` : ''
  );

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
    >
      {title}
    </button>
  );
};

export default Button;