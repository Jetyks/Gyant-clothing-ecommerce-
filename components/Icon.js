
import Image from 'next/image';

const Icon = ({alt, icon}) => {
    
  return (
    <div className='flex
    justify-center
    items-center
    w-full h-full border-hidden rounded-full hover:bg-customYellow'>
        <Image alt={alt} className='
        flex
        content-center items-center
        h-3/4
        w-3/4
        cursor-pointer
        ' 
        src={icon}></Image>
    </div>
  )
}

export default Icon