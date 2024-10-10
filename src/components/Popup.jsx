
const Popup = ({ show, onClose, children }) => {

  if (!show) return null;
  
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOverlayClick} >
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
