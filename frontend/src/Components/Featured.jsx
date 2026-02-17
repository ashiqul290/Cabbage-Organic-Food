import React from "react";
import TitleBar from "./TitleBar";
import Container from "./Container";
import { FaSearchPlus, FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Featured = () => {
  return (
    <>
      <TitleBar
        title={"Featured Products"}
        subtilte={
          "A highly efficient slip-ring scanner for today's diagnostic requirements."
        }
      />
      <Container>
        <div className="">
          <div className="w-67.5 h-92.5 p-2 shadow-[0_0_5px] shadow-gray-950/15 rounded-[10px] ">
            <div className=" relative w-full h-57.5 bg-tertiary rounded-[5px]">
              <div className=" flex gap-1 justify-center items-center w-full h-full bg-tertiary">
                <div className=" bg-white  w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-secondary hover:bg-secondary hover:text-white duration-500 ">

                <IoCartOutline className=""/>
                </div>
                <div className="bg-white w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-secondary hover:bg-secondary hover:text-white duration-500">

                <CiHeart className=""/>
                </div>
                <div className=" bg-white p-2 w-[35px] h-[35px] rounded-full rounded-full flex justify-center items-center text-secondary hover:bg-secondary hover:text-white duration-500">

                <FaSearchPlus className=""/>
                </div>
              </div>
            </div>

            <div className="px-4.25 flex justify-between items-start mt-6.25">
              <div className="">
                <div className="flex gap-1 items-center">
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-amber-400" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <FaStar className="text-tertiary" />
                  <span className=" ml-2 bg-secondary/15 px-1 text-secondary">
                    (24)
                  </span>
                </div>
                <h3 className="text-[16px] font-bold font-inter text-primary mt-2 mb-3">
                  Carrots Group Scal
                </h3>
                <h4 className="font-bold font-nunito text-[15px] text-tertiary ">
                  $32.00{" "}
                  <del className="text-[12px] text-secondary font-bold">
                    $45.00
                  </del>
                </h4>
              </div>
              <div className="w-[50px]  bg-secondary rounded-br-[15px] rounded-tl-[15px] text-white flex justify-center">
                <h4>-20%</h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Featured;
