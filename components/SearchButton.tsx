import Image from 'next/image'

const SearchButton = ({ otherClasses }: {otherClasses: string } ) => {
  return (
      <button type="submit" className={`-m1-3 z-10 ${otherClasses}`} >
         <Image 
            src="/images/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
            className="object-contain" 
         />
      </button>

  )
}

export default SearchButton