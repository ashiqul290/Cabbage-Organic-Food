import React from "react";
import Container from "./Container";

const TitleBar = ({ title, subtilte }) => {
  return (
    <>
      <Container>
        <div className=" text-center">
          <h2 className="text-[48px] font-bold font-inter text-primary">
            {title}
          </h2>
          <p className="text-[16px] font-nunito font-medium text-tertiary mt-4.75">
            {subtilte}
          </p>
        </div>
      </Container>
    </>
  );
};

export default TitleBar;
