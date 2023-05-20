import React from 'react';

export default function Message({ text, sender }) {
  const isUser = sender === 'user';
  const senderClass = isUser ? 'user' : 'other';

  return (
    <div className={`message-container ${senderClass}`}>
      <div className='message-sender'>{sender}</div>
      <div className='message-text'>{text}</div>
    </div>
  );
}
