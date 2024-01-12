import { profile } from "../Data/nav";

const Profile = () => {
  return (
    <>
      <div className="md:mt-[15%] md:mb-7 mt-[44%] mb-7" id='shop'>
        <div className="flex flex-col gap-20 justify-center items-center">
          <div className="">
            <h1 className="text-black text-2xl font-bold">
              Top Profile of this Week
            </h1>
          </div>

          <div>
            <div className="flex flex-row md:gap-20 gap-5">
              {profile.map((e) => {
                return (
                  <>
                    <div className="flex flex-col gap-1 justify-center items-center rounded md:w-[180%] md:p-9 md:h-[120%] p-1 bg-[#DDA0DD] transition-transform duration-300 ease-in-out hover:-translate-y-12 cursor-pointer">
                      <div>
                        <img
                          src={e.img}
                          className="w-[90px] h-[90px] rounded-full bg-[#DDA0DD]"
                          alt="profile"
                        />
                      </div>
                      <div>
                        <h1 className="text-lg font-bold">{e.name}</h1>
                      </div>
                      <div className="text-center">
                        <h1 className="text-lg">{e.price}k</h1>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
