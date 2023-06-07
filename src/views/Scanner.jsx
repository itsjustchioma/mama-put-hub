import React, { useState } from "react";
import NotificationModal from "../components/Modals/NotificationsModal";

const notifications = [
  {
    id: 1,
    title: "Notification 1",
    content: "This is the content of notification 1.",
  },
  {
    id: 2,
    title: "Notification 2",
    content: "This is the content of notification 2.",
  },
  {
    id: 3,
    title: "Notification 3",
    content: "This is the content of notification 3.",
  },
  // Add more notifications as needed
];

const Scanner = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  const handleModalClose = () => {
    setSelectedNotification(null);
  };

  return (
    <div className="container mx-auto p-4 px-12 md:px-32 mt-8">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white p-4 rounded border border-pastel-blue shadow cursor-pointer"
            onClick={() => handleNotificationClick(notification)}
          >
            <h2 className="text-lg font-semibold">{notification.title}</h2>
            <p>{notification.content}</p>
          </div>
        ))}
      </div>

      {selectedNotification && (
        <NotificationModal
          notification={selectedNotification}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default Scanner;
