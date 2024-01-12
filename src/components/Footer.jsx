import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { LiaInternetExplorer } from "react-icons/lia";
import { mainsocial, nav } from "../Data/nav";
import { Link } from "react-scroll";

const Footer = () => {

    return (
        <footer className="bg-neutral-600">
            <div>
            
<div className="grid lg-grid-cols-4 grid-cols-1 md:grid-cols-4 p-20">
<div className="flex flex-col gap-5">
<div className="rounded-full w-[50px] h-[50px]  bg-[#4B0082]">
     <h1 className="p-3 text-white text-sm">Logo</h1>
     <p className="text-3xl mt-4 font-bold">Name</p>
   </div>

   
</div>


<div className="flex flex-col gap-5  md:mt-0 mt-[25%]">
     <h1 className="p-3 text-white text-center font-bold text-3xl ">Contact Us</h1>
    <ul>
        <div className="flex flex-row">

    <span className="text-center"><IoLocationOutline className="text-white" /></span>  <li className=" text-white text-center"> Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, </li>
        </div>
    </ul>

    <ul>
        <div className="flex flex-row">

    <span className="text-center"><MdOutlinePhone className="text-white" /></span>  <li className="text-white  ml-5 text-center"> +91-0000000000 </li>
        </div>
    </ul>

    <ul>
        <div className="flex flex-row">

    <span className="text-center"><LiaInternetExplorer className="text-white" /></span>  <li className=" ml-5 text-white text-center"> https://www.influence.in/ </li>
        </div>
    </ul>

   
</div>


<div className="flex flex-col gap-5  md:mt-0 mt-[25%]">
     <h1 className="p-3 text-white text-center font-bold text-3xl">Quick Links</h1>
<ul className="text-center">

{
    nav.map((e)=>{
        return(
            <>
            <div className="flex flex-col gap-9">

            <Link to={e.path} className="text-white mb-9 ">{e.name}</Link>
            </div>
            </>
        )
    })
}

</ul>

   </div>


<div className="flex flex-col gap-5  md:mt-0 mt-[25%]">
 <h1 className="p-3 text-white text-bold text-3xl">Follow Us</h1>
<ul>
    <div className="flex flex-row gap-4">
        {
            mainsocial.map((e)=>{
                return(
                    <>
                    <li>
                        <img src={e.icon} alt="second" className="w-[40px] " />
                    </li>
                    </>
                )
            })
        }
        <li></li>
    </div>
</ul>
   
</div>
</div>

            </div>

            <div className="flex justify-center items-center">
                <h1 className="text-white">Design by World Tech Solutions</h1>
            </div>
        </footer>
    );
};

export default Footer;