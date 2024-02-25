import { MdOutlineArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textStructure mt-40 px-20'>
        {["We Create", "Eye-opening", "Presentations"].map((item, index) => {
          return <div key={index} className='masker'>
                  <h1 className='uppercase text-[7.5vw] leading-[6.8vw] tracking-tighter font-["Founders Grotesk"] font-semibold '>{ item }</h1>
                </div>
        })}
      </div>
      <div className='border-t-[1px] border-zinc-500 mt-24 flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
           <p key={index} className='text-md font-light tracking-tight leading-none'>{ item }</p>
        ))}

        <div className='start flex items-center gap-2'>
          <div className='uppercase border-[2px] text-md border-zinc-500 rounded-3xl py-1 px-4'>
            start the project
          </div>
          <div className='w-6 h-6 rounded-full border flex items-center justify-center p-4 '>
              <MdOutlineArrowOutward/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
