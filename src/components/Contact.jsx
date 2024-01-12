

const Contact = () => {
  return (
    <>
    <div className="md:mt-[10%] mt-[20%] mb-40">
<div className="flex flex-col justify-center items-center">

<div>
<h1 className="font-bold text-3xl text-black">Contact Us</h1>
</div>

<div className="p-9">
<div className="md:flex flex-row gap-9 mb-[20px]">
    <div className="text-center">
<label>Name:</label>
    </div>
    <div className="md:ml-[30px]">
<input type="text" className="border-2 rounded border-[#4B0082] md:w-[180%] " />
    </div>

</div>

<div className="md:flex flex-row gap-9 mb-[20px]">
    <div className="text-center">
<label>Email:</label>
    </div>
    <div className="md:ml-[35px]" >
<input type="email" className="border-2 rounded border-[#4B0082] md:w-[180%] " />
    </div>

</div>

<div className="md:flex flex-row gap-5 mb-[20px]">
    <div className="text-center">
<label>Phone No:</label>
    </div>
    <div className="md:ml-[20px]">
<input type="number" className="border-2 rounded border-[#4B0082] md:w-[180%] " />
    </div>

</div>

<div className="md:flex flex-row gap-1 ">
    <div className="text-center">
<label>Your Message:</label>
    </div>
    <div className="md:ml-[5px]">
<input type="message" className="border-2 rounded border-[#4B0082] md:w-[180%] md:h-[450%]  " />
    </div>

</div>


            </div>       
</div>

        </div>

    
    </>
  )
}

export default Contact