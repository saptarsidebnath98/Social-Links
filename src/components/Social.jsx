
export default function Social() {
  return (
    <div className="h-screen w-screen bg-stone-950 flex justify-center items-center text-sm font-inter">
        <div className="h-3/5 w-1/5 bg-neutral-800 rounded-lg">
            <div className="h-2/5 w-full flex flex-col gap-2 items-center bg-slate-700">
                <img 
                src="./src/assets/image.jpg" 
                alt="Profile Image" 
                className="h-1/2 w-fit rounded-full"/>
                <h3>Saptarsi Debnath</h3>
                <p>Kolkata, India</p>
                <p>&quot;Front-end developer and avid reader.&quot;</p>
            </div>
            <div className="h-3/5 w-full">

            </div>
        </div>
    </div>
  )
}
