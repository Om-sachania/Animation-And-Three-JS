import React from 'react'
import {motion} from 'motion/react'

const FramerMotion = () => {
  return (
    <div>
        {/* <motion.div
        // initial={{
        //     x:0,
        //     y:0
        // }}
        animate={{
            x:[0,1000,1000,0,0],
            y:[0,0,500,500,0],
            rotate:[180,0,0,0]
        }}
        transition={{
            delay:1,
            duration:5,
        }}
        className='box'>
            TTTTT
        </motion.div> */}

        {/* ON HOVER AND ON DRAG AND ON TAP FUNCTIONLITY */}

        <motion.div 
        drag
        whileDrag={{
            backgroundColor:'orange'
        }}
        className='box'
        // whileHover={{
        //     backgroundColor:'red'
        // }}
        // whileTap={{
        //     scale : 0.5
        // }}
        dragConstraints={{
            left : 0,
            top : 0,
            bottom : 500,
            right : 1000
        }}
        dragDirectionLock='true' // THIS funcionality helps to move object in only one direction
        >
        </motion.div>
        {/* <div className='circle'></div> */}
    </div>
  )
}

export default FramerMotion