import { motion } from 'motion/react';
import React from 'react'

function Marquee({imagesUrls,direction}){
    
    return (
        <>
        <div className='flex w-full overflow-hidden'>
            <motion.div initial={{x:direction ==="left" ?"0":"-100%"}} animate={{x:direction === "left"?"-100%":"0"}} transition={{ease:"linear",duration:15,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
                {imagesUrls.map((url,index)=><img kry={index} src={url} className=''/>)}
            </motion.div>
              <motion.div initial={{x:direction ==="left" ?"0":"-100%"}} animate={{x:direction === "left"?"-100%":"0"}} transition={{ease:"linear",duration:15,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
                {imagesUrls.map((url,index)=><img kry={index} src={url} className=''/>)}
            </motion.div>

            
          
            
        </div>
        </>
    )

} 
export default Marquee;


//yis trh bhi likh skte hai 

//  <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:10,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
//                 {imagesUrls.map((url,index)=><img kry={index} src={url} className=''/>)}
//             </motion.div>

//              <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:10,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
//                 {imagesUrls.map((url,index)=><img kry={index} src={url} className=''/>)}
//             </motion.div>