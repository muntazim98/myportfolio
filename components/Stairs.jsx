import { animate, motion } from "framer-motion";

const stairAnimation={
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    },
}


//calculate the reverse  index for staggered delay
const  reverseindex=(index)=>{
    const totalsteps=4;
    return totalsteps-index-1;   

}
const Stairs = () => {
  return (
    <>
      {/* render 8 motion divs,each representing a steps of the stairs
      Each div will have the same animation defined by the stairsanimation effect
      the delay for each div will be calculated simultaneously based on its reverse index
      we are creating a staggered effect with decreasing delay for each subsequent div 
       */}
       {[...Array(4)].map((_, index) => {
       return (<motion.div 
       key={index} variants={stairAnimation} initial="initial" animate="animate" exit="exit" 
        transition={{
            duration:0.4,
            ease:"easeInOut",
            delay:reverseindex(index)*0.1,  
        }} 
        className="h-full w-full bg-gray-400 relative"/>
       );
       })}
    </>
  );
}

export default Stairs
