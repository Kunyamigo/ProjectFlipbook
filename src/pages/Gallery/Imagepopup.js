import React from "react";
import { data } from "./Data";
import { motion } from "framer-motion";

const Imagepopup = ({ poper, layoutId }) => {
  const singleimage = data.find((item) => item.id === layoutId);

  return (
    <div className="pop_up_container">
      <div className="pop_up_image">
        <motion.img onClick={poper} src={`images/${singleimage.image}`} alt="" layoutId={layoutId} />
      </div>
    </div>
  );
};

export default Imagepopup;
