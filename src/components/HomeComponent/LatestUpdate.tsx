import Image from "next/image";
import carmodel from "../../../public/images/car-model.jpg";
const LatestUpdate = () => {
  return (
    <div className="lg:w-[1440px] mx-auto">
      <div className="md:flex items-center justify-between">
        <div className="mx-5 md:w-1/2">
          <p className="text-xl text-gray-500">-Need Update</p>
          <h1 className="text-2xl md:text-4xl font-semibold">
            Get latest updates and offers
          </h1>
          <p className="mt-5">
            Subscribe to continue to receive your Digital Vehicle Report Card
            sent to you by text and email every time your vehicle is in for
            service.
          </p>
          <div className="my-5 flex items-center">
            <input
              placeholder="Please Enter Your Email"
              className="input input-bordered w-1/2 md:w-1/3"
              type="email"
            />
            <button
              type="submit"
              className="btn bg-gradient-to-r from-cyan-500 to-blue-500 ml-5"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src={carmodel}
            alt="nav-image-logo"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdate;
