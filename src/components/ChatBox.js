import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function ChatBox() {
  const answer = useSelector((state) => state.AnswerReducer.answer);
  return (
    <motion.div
      animate={{
        height: answer ? "inherit" : "0px",
        display: answer ? "block" : "none",
      }}
      className="chatbox-container"
    >
      <h1>ChatBox</h1>
     <p>{answer}</p>
    </motion.div>
  );
}
