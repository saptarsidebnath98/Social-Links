import Buttons from "./Buttons";
export default function Social() {
  return (
    <div className="h-screen w-screen bg-Off-Black flex justify-center items-center text-sm font-inter">
        <div className="h-4/5 w-96 mx-2 md:h-3/5 md:w-80 bg-Dark-Grey rounded-lg select-none">
            <div className="h-1/2 w-full flex flex-col gap-1 items-center pt-5 md:pt-10">
                <img 
                src="./src/assets/image.jpg" 
                alt="Profile Image" 
                className="md:h-24 md:w-24 h-16 w-16 rounded-full"/>
                <h3 className="mt-2 text-xl font-bold text-white">Saptarsi Debnath</h3>
                <p className="font-bold text-custom-yellow">Kolkata, India</p>
                <p className="mt-3 text-white font-normal">&quot;Front-end developer and avid reader.&quot;</p>
            </div>
            <div className="h-1/2 w-full flex flex-col gap-4 pb-8 items-center justify-between">
                <Buttons/>
            </div>
        </div>
    </div>
  )
}
