import React from "react";

const NotificationModal = ({ notification, onClose }) => {
  const handleModalClick = (e) => {
    // Close the modal if the user clicks outside the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleModalClick}
    >
      <div className="bg-lemon-meringue p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-2">{notification.title}</h2>
        <p>{notification.content}</p>
      </div>
    </div>
  );
};

export default NotificationModal;
