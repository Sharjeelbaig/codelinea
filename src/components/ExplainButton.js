import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOutput } from "../redux/output/Action";
import ReactLoading from "react-loading";
import { motion } from "framer-motion";

const ExplainButton = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const input = useSelector((state) => state.InputReducer.input);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await dispatch(setOutput(input));
    } catch {
      console.log("error while fetching the api");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <ReactLoading
          type="cylon"
          color="#757575"
          height={"20%"}
          width={"20%"}
          className="loading-overlay"
        />
      ) : (
        <motion.button
         onClick={handleSubmit}
          className="explain-button"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 800, damping: 10 }}
          >
          Explain code
        </motion.button>
      )}
    </>
  );
};

export default ExplainButton;
