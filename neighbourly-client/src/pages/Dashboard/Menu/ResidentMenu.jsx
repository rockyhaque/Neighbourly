import React from "react";
import MenuItem from "./MenuItem";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";

const ResidentMenu = () => {
  return (
    <>
      <MenuItem
        icon={TfiLayoutListThumbAlt}
        label="My Booked Workers"
        address="my-booked-workers"
      />
    </>
  );
};

export default ResidentMenu;
