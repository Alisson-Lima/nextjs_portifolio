import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BgImageUrl from "../../../../public/bg-hero.png"

export default function Hero() {
    return (
        <div className='relative'>
            <Image src={BgImageUrl} alt='Image hero' width={1440} height={988} className="z-10 absolute" />
            <div className="content z-20 relative top-40">
                <span className='text-2xl text-[#5B29E5] inline-block z-10 relative'>Hello, my name is</span>
                <h1 className=' ml-14 text-5xl font-bold my-4'>Alisson Lima</h1>
                <p className=' text-lg text-[#6E6D73] hover:ml-8 transition-all duration-700 w-fit'>I'm a junior <i><b>React front-end developer</b></i> and</p>
                <p className=' text-lg text-[#6E6D73] hover:ml-8 transition-all duration-700 w-fit mb-8'>i like to make <i><b>creative</b></i> designs</p>
                <Link href="/projects" className='px-6 py-3 rounded-md border-2 border-[#5B29E5] hover:bg-[#5B29E5] font-medium transition-colors'>My projects</Link>
            </div>
        </div>
    )
}