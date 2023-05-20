import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Message from "./Message";

export default function ChatBox({ isOpen, setIsOpen }) {
  const chat = useSelector((state) => state.ChatReducer.chat);
  const closeChatBox = () => {
    setIsOpen(false);
  }
  return (
    <motion.div
      animate={{
        height: isOpen ? "inherit" : "0px",
        opacity: isOpen ? 1 : 0,
        display: isOpen ? "block" : "none",
      }}
      className="chatbox-container"
    >
      <div className="chatbox-header">
        <h1>ChatBox</h1>
        <button
          onClick={closeChatBox}
        >
          Close
        </button>
      </div>

      <div>
        {chat.map((key, index) => (
          <>
            <Message key={index} text={key.question} sender="user" />
            <Message key={index} text={key.answer} sender="Codelinea" />
          </>
        ))}
      </div>
    </motion.div>
  );
}
