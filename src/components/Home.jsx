import { mainsocial } from "../Data/nav";
import banner from "../assets/banner.jpg";

const Home = () => {
  return (
    <>
      <div>
        <div
          className=" flex mt-20 bg-gradient-to-r from-yellow-500 to-pink-600 md:w-full w-[100%]  h-[150%]"
          id="home"
        >
          <div className="md:p-28 md:mt-[40px] mt-[60px] p-3 md:w-[60%] w-[40%]">
            <h1 className="md:text-5xl text-2xl md:p-4 font-bold text-white">
              BlossomBoost
            </h1>
            <p className="md:w-[48%] md:p-4 md:text-lg text-sm w-[160%] mt-3 text-white ">
              Amplify Your Impact with a Bouquet of Likes and Flowers
            </p>
            <div className="md:p-4 my-3 md:w-[30%]">
              <button className="rounded bg-[#4B0082] text-white md:p-3 p-2">
                Know More
              </button>
            </div>
          </div>
          <div className="md:w-[20%]">
            <img
              src={banner}
              alt="banner"
              className=" md:w-full md:h-full mix-blend-darken"
            />
          </div>
        </div>
        <div className=" items-center flex justify-evenly  md:h-[18%] h-[20px] w-[100%] absolute  md:bottom-2 ">
          {mainsocial.map((e) => {
            return (
              <>
                <div className="md:p-3">
                  <div className="flex  flex-col justify-center items-center md:w-[160px] md:h-[160px] w-[92px] h-[99px]   rounded-full bg-[#DDA0DD]">
                    <div className="md:p-2">
                      <img
                        src={e.icon}
                        alt="first"
                        className="md:w-[60px] w-[30px]"
                      />
                    </div>
                    <div className="">
                      <h1>{e.name}</h1>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
