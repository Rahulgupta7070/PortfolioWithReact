import React from 'react'

function Stripe({val}){
    return (
        <>
        <div className=" w-[20%] px-10 py-4 border-t-[1.2px] bg-zinc-300 border-b-2 border-r-2 border-zinc-700  flex justify-between items-center" >
            <img src={val.url} alt="" className='text-white' />
            <span className='text-black'>{val.num}</span>
        </div>
        </>

    )
}
export  default Stripe;