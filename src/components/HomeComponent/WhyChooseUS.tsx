import "../../styles/custom.css";
import mask from "../../../public/images/usp_mask.png";
import glove from "../../../public/images/usp_gloves.png";
import support from "../../../public/images/usp_24_7.png";
import sanitized from "../../../public/images/usp_sanitized.png";
import service from "../../../public/images/car-service.webp";

import Image from "next/image";

const WhyChooseUS = () => {
  return (
    <div className="mt-[150px] lg:w-[1440px] mx-auto">
      <div className="mx-5">
        <p className="text-xl text-gray-500">-Why Choose US ?</p>
        <h1 className="text-2xl md:text-4xl font-semibold">
          Because We Care About your safety..
        </h1>
      </div>
      <div className=" md:flex justify-around my-10">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <Image
              src={mask}
              alt="nav-image-logo"
              width={50}
              height={20}
            ></Image>
            <p className="text-xl ml-5">
              Ensuring <br /> Masks
            </p>
          </div>
          <div className="flex items-center ">
            <Image
              src={glove}
              alt="nav-image-logo"
              width={50}
              height={20}
            ></Image>
            <p className="text-xl ml-5">
              Ensuring
              <br /> Gloves
            </p>
          </div>
          <div className="flex items-center">
            <Image
              src={support}
              alt="nav-image-logo"
              width={50}
              height={20}
            ></Image>
            <p className="text-xl ml-5">
              24/7 <br /> Support
            </p>
          </div>
          <div className="flex items-center">
            <Image
              src={sanitized}
              alt="nav-image-logo"
              width={50}
              height={20}
            ></Image>
            <p className="text-xl ml-5">
              Sanitising <br /> Hands <br /> & Equipment
            </p>
          </div>
        </div>
        <div>
          <Image
            src={service}
            alt="nav-image-logo"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;
