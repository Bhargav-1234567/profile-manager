// src/components/Modal.js
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Modal = ({ show, children, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
