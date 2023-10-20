const Counter = () => {
  return (
    <div className="lg:w-[1440px] mx-auto my-15 bg-gray-100 p-20 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-5">
        <div>
          <h1 className="text-4xl font-semibold">15,000 + </h1>
          <p className="text-xl mt-5">Service Providers</p>
        </div>
        <div>
          <h1 className="text-4xl font-semibold">2,00,000 +</h1>
          <p className="text-xl mt-5">Order Served</p>
        </div>
        <div>
          <h1 className="text-4xl font-semibold">1,00,000 +</h1>
          <p className="text-xl mt-5">5 Star Received</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
