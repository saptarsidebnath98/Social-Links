
export default function Buttons() {
    const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
  return (
    <>
      {links.map((btn, index) => {
          return (
              <div key={index} className="bg-Grey w-5/6 md:h-20 rounded-md flex justify-center items-center text-white font-semibold py-1  hover:bg-custom-yellow hover:text-black cursor-pointer select-none">
                  <button>
                      {btn}
                    </button>
                </div>
          )
      }
      )}
    </>
  )
}
