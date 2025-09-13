import React from 'react'
import Stripe from './Stripe';

function Stripes(){

    const data =[
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",num:"23"},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a791f752d7eb2b20280_Keystone-black.svg",num:"23"},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",num:"23"},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf9533879784a0cf5fa_logo-onLight.svg",num:"23"},
        
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d4ed1253edc0166ecbad_Lavendar-logo-black.svg",num:"23"}

    ]
    return (
        <>
        <div className='flex items-center mt-10'>
            {data.map((elem,index)=>(
                <Stripe key={index} val={elem}/>
            ))}


        </div>
        </>

    )
}
export  default Stripes;