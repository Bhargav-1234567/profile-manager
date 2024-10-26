import React from "react";
import { motion } from "framer-motion";

const Confirmation = ({ onConfirm, onCancel }) => {
  return (
    <div>
      <div>Are you sure you want to Delete this record?</div>
      <div className="model-action">
        <motion.button
          className="common-button success"
          whileTap={{ scale: 0.85 }}
          type="button"
          onClick={onConfirm}
        >
          Delete
        </motion.button>
        <motion.button
          className="common-button danger"
          whileTap={{ scale: 0.85 }}
          onClick={onCancel}
          type="button"
        >
          Close
        </motion.button>
      </div>
    </div>
  );
};

export default Confirmation;
