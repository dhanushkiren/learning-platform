// Notification.js

import React, { useState } from 'react';
import './Notification.css'; // Import the CSS file for styling
import { format } from 'date-fns'; // Import date-fns for date formatting
import { FaUser, FaReply, FaPaperPlane } from 'react-icons/fa'; // Import the User, Reply, and PaperPlane icons from react-icons

const Notification = () => {
  // Dummy data for staff messages
  const staffMessages = [
    { sender: 'Abi', message: 'Message 1', timestamp: new Date() },
    { sender: 'John', message: 'Message 2', timestamp: new Date() },
    { sender: 'Jane', message: 'Message 3', timestamp: new Date() },
    // Add more staff messages as needed
  ];

  const [isNotificationOn, setIsNotificationOn] = useState(true);
  const [replyMessage, setReplyMessage] = useState('');

  const toggleNotification = () => {
    setIsNotificationOn(!isNotificationOn);
  };

  const handleReply = () => {
    // Implement your logic for handling the reply message
    console.log('Reply:', replyMessage);
    // Reset the reply input after sending
    setReplyMessage('');
  };

  return (
    <div className="notification-container">
      <div className="notification-header">
        <h2>
          Notifications
          {staffMessages.length > 0 && (
            <span className="notification-count">{staffMessages.length}</span>
          )}
        </h2>
        <div className="notification-toggle">
          <label className="switch">
            <input type="checkbox" checked={isNotificationOn} onChange={toggleNotification} />
            <span className="slider round"></span>
          </label>
          <span className="toggle-label">{isNotificationOn ? 'On' : 'Off'}</span>
        </div>
      </div>
      {isNotificationOn && (
        <div className="notification-content">
          {/* Display the list of staff messages */}
          {staffMessages.length > 0 ? (
            <div className="notification-cards">
              {staffMessages.map((message, index) => (
                <div key={index} className="notification-card">
                  <div className="card-header">
                    <span className="sender-icon">
                      <FaUser />
                    </span>
                    <span className="sender-name">{message.sender}</span>
                    <span className="timestamp">
                      {format(message.timestamp, 'MMM dd, yyyy HH:mm')}
                    </span>
                  </div>
                  <div className="message-body">{message.message}</div>
                  <div className="reply-section">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                    />
                    <button className="send-button" onClick={handleReply}>
                      <FaPaperPlane /> Send
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-messages">No messages to display.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;
