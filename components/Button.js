

const Button = ({title, onClick, isSelected, color, hoverBgColor, borderColor, backgroundColor }) => {
  // Define estilos básicos para el botón
  const baseStyles = 'w-full h-full border-2 text-yellow-900';
  // Estilos condicionales basados en isSelected, solo si está definido
  const selectedStyles = isSelected !== undefined 
  ? (isSelected ? 'border-yellow-950 text-yellow-950 opacity-100' : 'border-yellow-900 opacity-65') 
  : '';

// Define el color de texto y el color de borde, usando los valores de color si están definidos
const finalTextColor = color ? `text-${color}` : (isSelected ? 'text-yellow-950' : 'text-yellow-900');
const finalHoverBgColor = hoverBgColor ? `hover:bg-${hoverBgColor}` : '';
const finalBorderColor = borderColor ? `border-${borderColor}` : (isSelected ? 'border-yellow-950' : 'border-yellow-900');

// Color de fondo condicional
const finalBackgroundColor = backgroundColor ? `bg-${backgroundColor}` : '';

  return (
      <div className="w-full h-full">
          <button
              onClick={onClick}
              className={`${baseStyles} ${selectedStyles} ${finalBorderColor} ${finalBackgroundColor} ${finalTextColor} ${finalHoverBgColor}`}
          >
              {title}
          </button>
      </div>
  );
}

export default Button