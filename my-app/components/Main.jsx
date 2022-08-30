import Image from 'next/image'
import Link from 'next/link'
import img from '../public/niceshoeslogo.png'


export default function Main() {

    
    return (
        <div className='flex flex-col'>
            <h1 className=" text-[#CB3532] font-neue font-bold mx-auto mt-[75px] text-3xl text-center lg:hidden">Nice Shoes Smart Lottery</h1>
            <div className='mx-auto lg:mt-[-300px] '>
                <Image src={img} alt='' />
            </div>
            <h2 className='text-[#CB3532] mx-auto text-center mt-[-50px] mb-[10px] font-concert lg:mt-[-300px] lg:text-6xl'>COMING SOON!</h2>
            <h3 className='text-[#CB3532] mx-auto text-center mb-[10px] font-concert lg:text-3xl'>Follow us on Twitter</h3>
            <a href='https://twitter.com/niceshoesapp' className='text-[#CB3532] mx-auto text-center mb-[50px] font-concert lg:text-xl'>@NiceShoesApp</a>
        </div>
    )
}