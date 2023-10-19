import Image from "next/image";
import "../../styles/custom.css";
import image from "../../../public/photos/1122286_4839.jpg";
const Banner = () => {
  return (
    <div className="bg-white">
      <div className="w-[1440px] mx-auto flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-4xl text-black font-semibold">We Give</h1>
          <h1 className="text-6xl text-black mt-1">Best Home</h1>
          <h1 className="text-6xl text-black mt-1">Services</h1>
          <p className="text-gray-700 font-serif">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minus
            minima ab. Quidem cumque eum facere impedit debitis magnam id.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src={image}
            alt="A descriptive image alt text"
            width={500}
            height={300}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
