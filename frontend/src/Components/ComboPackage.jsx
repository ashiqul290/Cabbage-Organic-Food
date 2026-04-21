import Image from "next/image";
import React from "react";
import Container from "./Container";
import logoIMg from '@/assets/header/Group 15654.png'
import savonIMG from '@/assets/productIMGVIEW/botttles.png'
const ComboPackage = () => {
  return (
    <>
      <div className="bg-[#F7F5EB] py-6">
        <Container>
          <div className=" flex gap-25 items-center  py-10">
            <div className="">
            <Image  src={savonIMG} width={633} height={561} alt="img"/>
            </div>
            <div className="">
                <h4 className="text-[16px] font-bold font-nunito text-secondary">Todays Hot Deals</h4>
                <h2 className="text-[50px] font-bold font-inter text-primary mb-[16px]">Original Stock Honey</h2>
                <h2 className="text-[50px] font-bold font-inter text-primary mb-[16px]">Combo Package</h2>
              
                <p className="text-[16px] font-medium font-nunito  text-tertiary w-130">Cur tantas regiones barbarorum obiit, tot maria transmist summo bono fruitur id est voluptate barbarorum </p>
                   <div className="flex items-center gap-8 mt-4">
                    
                   <div className="">
                     <div className=" h-12 w-12 bg-white flex justify-center items-center rounded-full shadow-[0_0_5px] shadow-black/40"><h5 className=" text-xl font-medium text-secondary">02</h5></div>
                    <h3 className=" text-xl font-medium">Days</h3>
                   </div>
                   <div className="">
                     <div className=" h-12 w-12 bg-white flex justify-center items-center rounded-full shadow-[0_0_5px] shadow-black/40"><h5 className=" text-xl font-medium text-secondary">12</h5></div>
                    <h3 className=" text-xl font-medium">Houres</h3>
                   </div>
                   <div className="">
                     <div className=" h-12 w-12 bg-white flex justify-center items-center rounded-full shadow-[0_0_5px] shadow-black/40"><h5 className=" text-xl font-medium text-secondary">42</h5></div>
                    <h3 className=" text-xl font-medium">Minutes</h3>
                   </div>
                   <div className="">
                     <div className=" h-12 w-12 bg-white flex justify-center items-center rounded-full shadow-[0_0_5px] shadow-black/40"><h5 className=" text-xl font-medium text-secondary">53</h5></div>
                    <h3 className=" text-xl font-medium">Seconds</h3>
                   </div>
                    
                </div>

              <div className="flex gap-4 mt-8 items-center">
                  <button className="bg-secondary text-white py-3 px-6 rounded-[10px] font-medium hover:bg-secondary/80 transition duration-300">Shop Now</button>
                <a href="" className="text-secondary font-medium hover:underline">Deal of The Day</a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ComboPackage;
