import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 backdrop-filter backdrop-blur">
      <div className="bg-lemon-meringue rounded-lg p-6">{children}</div>
    </div>
  );
};

export default Modal;
