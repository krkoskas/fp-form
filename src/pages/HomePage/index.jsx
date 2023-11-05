import React from "react";
import './style.css';
import {isMobile} from "react-device-detect";
import Form from "../../components/Form/index.jsx";

export const HomePage = () => {
  return (
      <div className={isMobile ? "page_wrapper-mobile" : "page_wrapper-desktop"}>
    <Form/>
      </div>
  );
};
