import Image from "next/image";
import mobile from "../../../public/images/776061.png";

const HowItWork = () => {
  return (
    <div className="lg:w-[1440px] mx-auto my-20">
      <div className="mx-5">
        <p className="text-xl text-gray-500">-How its work ?</p>
        <h1 className="text-2xl md:text-4xl font-semibold">
          Easiest way to get a service..
        </h1>
      </div>
      <div className="md:flex justify-around items-center mt-10">
        <div className=" flex justify-center p-10">
          <Image
            src={mobile}
            alt="nav-image-logo"
            width={400}
            height={200}
          ></Image>
        </div>
        <div>
          <div className="flex mt-5">
            <p className="text-2xl p-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-20 h-20 text-center rounded-full">
              1
            </p>
            <div className="ml-5">
              <h3 className="text-2xl font-semibold">Select the Service</h3>
              <p>
                Pick the service you are looking for- from the website or the
                app.
              </p>
            </div>
          </div>
          <div className="flex mt-5">
            <p className="text-2xl p-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-20 h-20 text-center rounded-full">
              2
            </p>
            <div className="ml-5">
              <h3 className="text-2xl font-semibold">Pick your schedule</h3>
              <p>
                Pick your convenient date and time to avail the service. Pick
                the service provider based on their rating.
              </p>
            </div>
          </div>
          <div className="flex mt-5">
            <p className="text-2xl p-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-20 h-20 text-center rounded-full">
              3
            </p>
            <div className="ml-5">
              <h3 className="text-2xl font-semibold">
                Place Your Order & Relax
              </h3>
              <p>
                Review and place the order. Now just sit back and relax. We’ll
                assign the expert service provider’s schedule for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
