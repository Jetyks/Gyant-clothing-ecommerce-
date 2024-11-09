

import classNames from 'classnames';

const Button = ({ 
  title, 
  onClick, 
  isSelected, 
  color, 
  hoverBgColor,
  borderColor, 
  backgroundColor 
}) => {
  const buttonClasses = classNames(
    'w-full h-full border-2 transition-opacity duration-150', 
    {
      'text-yellow-950 border-yellow-950 opacity-100': isSelected === true,
      'opacity-60 border-yellow-900': isSelected === false,
      [`text-${color}`]: color,
      [`hover:bg-${hoverBgColor}`]: hoverBgColor,
      [`border-${borderColor}`]: borderColor,
      [`bg-${backgroundColor}`]: backgroundColor
    }
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