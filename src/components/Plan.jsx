import { profile } from "../Data/nav";

const Plan = () => {
  return (
    <>
  <div className="md:mt-[10%] md:mb-7 mt-[20%] mb-7" id='get'>
        <div className="flex flex-col gap-20 justify-center items-center">
          <div className="">
            <h1 className="text-black text-3xl font-bold">
             Plan
            </h1>
          </div>

          <div>
            <div className="flex flex-row md:gap-20 gap-5">
              {profile.map(() => {
                return (
                  <>
                    <div className="flex flex-col gap-1 justify-center items-center rounded md:w-[200%] md:p-9 md:h-[120%] p-1 bg-[#DDA0DD] ">
                    <button className="mt-[250%] rounded bg-[#4B0082] text-white w-[90px] h-[40px] p-2">Select</button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Plan