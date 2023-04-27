import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import developer from "../assets/developer.png";
import scrolldown from "../assets/scrolldown.svg";

export default function HireMe() {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(null);
  const dragHandleRef = useRef(null);
  const [dragHandleHeight, setDragHandleHeight] = useState(null);
  const [opened, setOpened] = useState(false);
  const [slidingHint, setSlidingHint] = useState(false);

  useEffect(() => {
    setContainerHeight(containerRef.current.offsetHeight);
    setDragHandleHeight(dragHandleRef.current.offsetHeight);
  }, []);

  const onDragEnd = () => {
    if (!opened) {
      setOpened(true);
    } else {
      setOpened(false);
    }
  };

  const onTap = () => {
    if (!opened) {
      setSlidingHint(true);
      setTimeout(() => {
        setSlidingHint(false);
      }, 1000);
    }
  };

  return (
    <motion.div
      drag="y"
      ref={containerRef}
      className="hire-me-container"
      dragConstraints={{
        bottom: 0,
        top: -(containerHeight - dragHandleHeight),
      }}
      animate={{ bottom: dragHandleHeight - containerHeight }}
      onTap={onTap}
      onDragEnd={onDragEnd}
    >
      <div ref={dragHandleRef} className="hire-me-drag-handle">
        <div>
          {slidingHint ? (
            <p style={{ color: "yellow" }}>slide the handle up!</p>
          ) : (
            <p>↑ Hire Developer</p>
          )}
        </div>
      </div>
      <div className="hire-me-contents">
        <div className="hire-me-header">
          <img className="developer-image" src={developer} />
          <h1>
            Looking for a developer to work for your Team<b>?</b>
          </h1>
          <img src={scrolldown} />
        </div>

        <div className="hire-me-body">
          <p>
            👨‍💻 I'm an experienced software developer with a passion for coding,
            and I'm excited about the opportunity to work with you
          </p>
          <p>
            🔧 Over the years, I've worked on a wide range of projects, from
            simple web applications to complex enterprise systems
          </p>
          <p>
            💪 I'm proficient in several programming languages, including Java,
            Python, C++, and JavaScript, and I'm always eager to learn new
            technologies and frameworks
          </p>
          <p>
            🤝 As a team player, I understand the importance of clear
            communication and collaboration, and I'm committed to delivering
            high-quality work that meets your expectations
          </p>
          <p>
            🚀 Let's work together to take your project to the next level! Feel
            free to contact me through the social media links provided at the
            top header in this website
          </p>
          <p>
            📧 If you're interested in learning more, please don't hesitate to
            reach out
          </p>
          <p>
            🙏 !Thank you for considering me for this opportunity. I look
            forward to hearing from you soon
          </p>
          <p>
            ,Best regards
            <br />
            🚀 Sharjeel{" "}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
