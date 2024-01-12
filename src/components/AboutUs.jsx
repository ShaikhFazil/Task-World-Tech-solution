import about from "../assets/about.png";

const AboutUs = () => {
  return (
    <>
      <div className="mt-[10%] bg-[#ecddfc] md:p-9 p-3" id='about'>
        <div className="md:p-5 p-2 md:flex flex flex-col md:flex-row  ">
          <div className="md:w-[60%] ">
            <h1 className=" inline-block font-bold text-5xl">About Us</h1>
            <p className="md:w-[60%] w-full mt-9 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>

            <div className="md:p-1 my-3 md:w-[30%]">
              <button className="rounded bg-[#4B0082] text-white md:p-3 p-2">
                Know More
              </button>
            </div>
          </div>
          <div className="md:w-[30%] w-[50%]">
            <img src={about} alt="about" className="md:w-[100%] ml-14" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
