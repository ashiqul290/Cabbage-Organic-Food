import React from "react";
import Container from "./Container";

const TitleBar = ({ title, subtilte ,text}) => {
  return (
    <>
      <Container>
        <div className={` text-center `}>
          <h2 className={`text-[48px] font-bold font-inter text-primary ${text}`}>
            {title}
          </h2>
          <p className={`text-[16px] font-nunito font-medium text-tertiary mt-4.75 ${text}`}>
            {subtilte}
          </p>
        </div>
      </Container>
    </>
  );
};

export default TitleBar;
