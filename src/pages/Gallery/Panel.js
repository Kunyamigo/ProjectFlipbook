import React, { useState } from "react";
import { data } from "./Data";
import Imagepopup from "./Imagepopup";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import "./Gallery.css"


const Panel = () => {
  const [popup, setpopup] = useState(false);
  const [layoutId, setlayoutId] = useState(null);
  const poper = (id) => {
    if (popup === false) {
      setlayoutId(id);
      setpopup(!popup);
    } else {
      setpopup(!popup);
      setlayoutId(null);
    }
  };
  return (
    <div>
      <AnimateSharedLayout>
      <h3>Mi galeria</h3>
        <div className="image_grid">
          {data.map((item) => {
            return (
              <div className="image_card" onClick={() => poper(item.id)}>
                <motion.img src={`images/${item.image}`} alt="" layoutId={item.id} />
              </div>
            );
          })}
        </div>
        <div className="image_pop_up">
          <AnimatePresence>
            {popup && <Imagepopup poper={poper} layoutId={layoutId} />}
          </AnimatePresence>
        </div>
      </AnimateSharedLayout>
    </div>
  );
};

export default Panel;
