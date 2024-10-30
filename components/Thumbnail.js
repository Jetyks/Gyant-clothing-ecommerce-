const Thumbnail = ({ image, isSelected, onClick }) => {
  return (
    <div
      className={`cursor-pointer transition-opacity duration-300 ${
        isSelected ? 'opacity-100 ' : 'opacity-70'
      }`}
      onClick={onClick}
    >
      <img
        src={image}
        alt="Product variant"
        className="w-16 h-20 object-cover"
      />
    </div>
  );
};

export default Thumbnail;