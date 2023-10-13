import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {  // Replace onSubmit with children
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg">
        <button onClick={onClose} className="float-right text-lg font-bold">&times;</button>
        <div className="clear-both">
          {children}  {/* Render children here */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
