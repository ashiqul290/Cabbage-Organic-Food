import React from "react";
import TitleBar from "./TitleBar";
import Container from "./Container";
import Image from "next/image";
import bgIMG from "@/assets/FacilitiesIMG/Group.png";
import fruits from "@/assets/FacilitiesIMG/fruits.png";
import jhurirrr from "@/assets/FacilitiesIMG/jhurirrr.png";
const Facilities = () => {
  return (
    <>
      <div className="mt-27 mb-30">
        <TitleBar
          title={"Product Facilities"}
          subtilte={`A highly efficient slip-ring scanner for today's diagnostic requirements.`}
        />

        <Container>
          <div className="flex items-center justify-between mt-4">
            <div className="">
              <div className="flex items-center">
                <div className=" relative flex">
                  <Image src={bgIMG} width={100} height={100} alt="img" />
                  <Image
                    className=" absolute top-7 left-7"
                    src={fruits}
                    width={38}
                    height={38}
                    alt="img"
                  />
                </div>
                <div className="">
                  <h3 className=" font-bold font-inter text-[22px] text-primary">
                    Eat Healthy Food
                  </h3>
                  <p className="text-4 font-medium font-nunito text-tertiary">
                    Est ante in nibh mauris. Ullamcor
                  </p>
                  <p className="text-4 font-medium font-nunito text-tertiary">
                    morbi tincidunt ornare massa
                  </p>
                </div>
              </div>
              <div className="flex items-center my-12">
                <div className=" relative flex">
                  <Image src={bgIMG} width={100} height={100} alt="img" />
                  <Image
                    className=" absolute top-7 left-7"
                    src={fruits}
                    width={38}
                    height={38}
                    alt="img"
                  />
                </div>
                <div className="">
                  <h3 className=" font-bold font-inter text-[22px] text-primary">
                    Eat Healthy Food
                  </h3>
                  <p className="text-4 font-medium font-nunito text-tertiary">
                    Est ante in nibh mauris. Ullamcor
                  </p>
                  <p className="text-4 font-medium font-nunito text-tertiary">
                    morbi tincidunt ornare massa
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className=" relative flex">
                  <Image src={bgIMG} width={100} height={100} alt="img" />
                  <Image
                    className=" absolute top-7 left-7"
                    src={fruits}
                    width={38}
                    height={38}
                    alt="img"
                  />
                </div>
                <div className="">
                  <h3 className=" font-bold font-inter text-[22px] text-primary">
                    Eat Healthy Food
                  </h3>
                  <p className="text-4 font-medium font-nunito text-tertiary">
                    Est ante in nibh mauris. Ullamcor
                  </p>
                  <p className="text-4 font-medium font-nunito text-tertiary">
                    morbi tincidunt ornare massa
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <Image src={jhurirrr} width={500} height={494} alt="img" />
            </div>
            <div className="">
              <div className="flex items-center">
                <div className=" relative flex">
                  <Image src={bgIMG} width={100} height={100} alt="img" />
                  <Image
                    className=" absolute top-7 left-7"
                    src={fruits}
                    width={38}
                    height={38}
                    alt="img"
                  />
                </div>
                <div className="">
                  <h3 className=" font-bold font-inter text-[22px] text-primary">
                    Eat Healthy Food
                  </h3>
                  <p className="text-4 font-medium font-nunito text-tertiary">
                    Est ante in nibh mauris. Ullamcor
                  </p>
                  <p className="text-4 font-medium font-nunito text-tertiary">
                    morbi tincidunt ornare massa
                  </p>
                </div>
              </div>
              <div className="flex items-center my-12">
                <div className=" relative flex">
                  <Image src={bgIMG} width={100} height={100} alt="img" />
                  <Image
                    className=" absolute top-7 left-7"
                    src={fruits}
                    width={38}
                    height={38}
                    alt="img"
                  />
                </div>
                <div className="">
                  <h3 className=" font-bold font-inter text-[22px] text-primary">
                    Eat Healthy Food
                  </h3>
                  <p className="text-4 font-medium font-nunito text-tertiary">
                    Est ante in nibh mauris. Ullamcor
                  </p>
                  <p className="text-4 font-medium font-nunito text-tertiary">
                    morbi tincidunt ornare massa
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className=" relative flex">
                  <Image src={bgIMG} width={100} height={100} alt="img" />
                  <Image
                    className=" absolute top-7 left-7"
                    src={fruits}
                    width={38}
                    height={38}
                    alt="img"
                  />
                </div>
                <div className="">
                  <h3 className=" font-bold font-inter text-[22px] text-primary">
                    Eat Healthy Food
                  </h3>
                  <p className="text-4 font-medium font-nunito text-tertiary">
                    Est ante in nibh mauris. Ullamcor
                  </p>
                  <p className="text-4 font-medium font-nunito text-tertiary">
                    morbi tincidunt ornare massa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Facilities;
