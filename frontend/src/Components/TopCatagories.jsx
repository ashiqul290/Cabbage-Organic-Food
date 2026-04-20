"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from 'react'
import TitleBar from './TitleBar'
import Container from "./Container";
import Slider from "react-slick";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack  } from "react-icons/io";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginLeft: '-130px', background: "white" , marginTop: '-50px', height: '40px', width: '40px' ,display : "flex", justifyContent: "center", alignItems : 'center' , borderRadius: '100%', color: "green" }}
      onClick={onClick}
    />
  );
}
const TopCatagories = () => {
      const sliderRef = useRef(null);
   const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <>
    <div className="pt-[106px] bg-tertiary pb-73.5">
    <TitleBar className={'text-white'} title={'Top Catagories'} subtilte={`A highly efficient slip-ring scanner for today's diagnostic requirements.`} text={'text-white'}/>

    

    </div>


    <Container>
    <div className="relative mt-[-220px] h-[432px] bg-white shadow-[0_0_10px] shadow-gray-900/35 rounded-[10px] flex items-end px-[120px]">
  <div className=" w-full h-[313px] flex justify-between">
     <div className="slider-container w-full">
      <Slider ref={sliderRef} {...settings}>
      <div className=" text-center group  w-[147px]   pb-30 hover:border-b-4 border-secondary">
        <div className=" w-[100px] h-[100px] bg-[#A8B324]/50 rounded-full flex items-center justify-center mx-auto">

        <Image src={''} width={50} height={50} alt="img"/>
        </div>
        <h4 className="text-[18px] font-bold font-inter text-primary mt-5 mb-4 group-hover:text-secondary duration-500">Fruits & Vegies</h4>
        <p className="text-[15px] font-medium font-nunito text-[#1A2167]">(235 item)</p>
    </div>
    <div className=" text-center group duration-500 w-[147px] duration-300  pb-30 hover:border-b-4 border-secondary">
        <div className=" w-[100px] h-[100px] bg-[#A8B324]/50 rounded-full flex items-center justify-center mx-auto">

        <Image src={''} width={50} height={50} alt="img"/>
        </div>
        <h4 className="text-[18px] font-bold font-inter text-primary mt-5 mb-4 group-hover:text-secondary duration-500">Fruits & Vegies</h4>
        <p className="text-[15px] font-medium font-nunito text-[#1A2167]">(235 item)</p>
    </div>
      <div className=" text-center group  w-[147px]   pb-30 hover:border-b-4 border-secondary">
        <div className=" w-[100px] h-[100px] bg-[#A8B324]/50 rounded-full flex items-center justify-center mx-auto">

        <Image src={''} width={50} height={50} alt="img"/>
        </div>
        <h4 className="text-[18px] font-bold font-inter text-primary mt-5 mb-4 group-hover:text-secondary duration-500">Fruits & Vegies</h4>
        <p className="text-[15px] font-medium font-nunito text-[#1A2167]">(235 item)</p>
    </div>
    <div className=" text-center group duration-500 w-[147px] duration-300  pb-30 hover:border-b-4 border-secondary">
        <div className=" w-[100px] h-[100px] bg-[#A8B324]/50 rounded-full flex items-center justify-center mx-auto">

        <Image src={''} width={50} height={50} alt="img"/>
        </div>
        <h4 className="text-[18px] font-bold font-inter text-primary mt-5 mb-4 group-hover:text-secondary duration-500">Fruits & Vegies</h4>
        <p className="text-[15px] font-medium font-nunito text-[#1A2167]">(235 item)</p>
    </div>
      <div className=" text-center group  w-[147px]   pb-30 hover:border-b-4 border-secondary">
        <div className=" w-[100px] h-[100px] bg-[#A8B324]/50 rounded-full flex items-center justify-center mx-auto">

        <Image src={''} width={50} height={50} alt="img"/>
        </div>
        <h4 className="text-[18px] font-bold font-inter text-primary mt-5 mb-4 group-hover:text-secondary duration-500">Fruits & Vegies</h4>
        <p className="text-[15px] font-medium font-nunito text-[#1A2167]">(235 item)</p>
    </div>
    <div className=" text-center group duration-500 w-[147px] duration-300  pb-30 hover:border-b-4 border-secondary">
        <div className=" w-[100px] h-[100px] bg-[#A8B324]/50 rounded-full flex items-center justify-center mx-auto">

        <Image src={''} width={50} height={50} alt="img"/>
        </div>
        <h4 className="text-[18px] font-bold font-inter text-primary mt-5 mb-4 group-hover:text-secondary duration-500">Fruits & Vegies</h4>
        <p className="text-[15px] font-medium font-nunito text-[#1A2167]">(235 item)</p>
    </div>
     
      </Slider>
    
    </div> 
  </div>
  <div className=" absolute top-50 -right-15">
    <button  onClick={() => sliderRef.current?.slickNext()} className="w-12 h-12 bg-white border rounded-full text-secondary hover:bg-secondary hover:text-white flex justify-center items-center text-2xl"><IoIosArrowForward />
</button>
  </div>
  <div className=" absolute top-50 -left-15">
    <button onClick={() => sliderRef.current?.slickPrev()} className="w-12 h-12 bg-white border rounded-full text-secondary hover:bg-secondary hover:text-white flex justify-center items-center text-2xl"><IoIosArrowBack  />
</button>
  </div>
    </div>
{/* */}
    </Container>










    
    </>
  )
}

export default TopCatagories