import Image from "next/image"

const Hero = () => {
  return (
   <div className='relative flex justify-center items-center min-h-screen min-w-screen shadow'>
      <Image
         src='/images/hero_right_wo_bg.png'
         alt="hero right"
         width={240}
         height={240}
         className="absolute right-0 bottom-0 -z-10"
      />
      <Image
         src='/images/hero_left_wo_bg.png'
         alt="hero right"
         width={240}
         height={240}
         className="absolute left-0 bottom-0 -z-10"
      />

   <div className="flex flex-col justify-center items-center gap-8">
         <h1 className="text-5xl font-bold ">Shop your designer dresses</h1>
         <p className="text-xl font-lighter ">Ready to wear dresses tailored for you online. Hurry up while stock lasts.</p>
         <div className="flex justify-center items-center w-full rounded-lg shadow-xl">
           <input 
             type="text" 
             name='searchBox' 
             placeholder='Search your products from here' 
             className='py-3 px-5 rounded-l-lg w-full' 
             />
   
         <button type="submit" className={`text-white -ml-[8rem] px-4 bg-brightGreen flex items-center py-1 rounded-r-lg`} >
            <Image
               src="/images/magnifying-glass.svg"
               alt="magnifying glass"
               width={40}
               height={40}
               className="bg-none" 
            />
            <span className="">
             Search
            </span>
         </button>
               </div>
   
   </div>
       </div>
   
  )
}

export default Hero