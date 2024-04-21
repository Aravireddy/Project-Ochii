import React from 'react'
import './landing.css'
import { FaArrowUpLong } from 'react-icons/fa6'

function Landingpage() {
  return (
    <div className="w-full h-screen bg-zinc-100 pt-1">
        <div className="textstructure px-10 mt-16">
            {["We create", "Eye opening", "presentations"].map((item, index) =>{
                return <div className="masker">
                    <h1 className='uppercase text-[9vw] text-slate-950 leading-[7vw] tracking-tight font-semibold herotext'>{item}</h1>
                </div>
            })}
           
        </div>
        <div className='border-t-2 border-zinc-700 mt-28 flex justify-between items-center py-5 px-10'>
            {["For public and private companies","From the first pitch to IPO"].map((item, index)=> (
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className="start flex items-center gap-5">
            <div className='px-5 py-2 border-[1px] border-zinc-800 rounded-full font-light text-sm uppercase'>Start the project</div>
            <div className='h-10 w-10 flex items-center justify-center border-[1px] border-zinc-800 rounded-full'><span className='rotate-[45deg]'><FaArrowUpLong /></span></div>
        </div>
        </div>
        
    </div>
  )
}

export default Landingpage