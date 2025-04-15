import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
 
const RunAnimation = (props) => {
  const { componentDataDispatcher } = props;
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  let headingNew;
  let subheadingNew;
  const headingEt = componentDataDispatcher?.componentData?.heading_et;
  if (headingEt) {
    headingNew = headingEt?.split('<span')?.[0];
    const subheadingMatch = headingEt.match(
      /class="animate-text">([^<]+)<\/span>/
    );
    
    if (subheadingMatch && subheadingMatch[1]) {
      subheadingNew = subheadingMatch[1].split(',');
    }
  }
 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % subheadingNew.length
      );
    },4000)
 
    return () => clearInterval(timer);
  }, [subheadingNew.length]);
 
  const letterVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };
 
  const getTransitionDuration = () => {
    if (currentTextIndex === 0) {
      return 0.4;
    } else if (currentTextIndex === 1) {
      return 0.7;
    } else {
      return 0.3;
    }
  };
 
  return (
    <div className="heading" id="_heading">
      <h1>
        <strong
        dangerouslySetInnerHTML={{__html:headingNew}}/>
        <motion.div className="heading">
          <AnimatePresence mode="popLayout">
            {subheadingNew[currentTextIndex]
              .split('')
              .map((letter, i) => (
                <motion.span
                  className='newHeading'
                  key={`${currentTextIndex}-${i}`}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    delay: i * 0.15,
                    duration: getTransitionDuration(),
                  }}>
                  {letter}
                </motion.span>  
              ))}
          </AnimatePresence>
        </motion.div>
      </h1>
    </div>
  );
};
 
export default RunAnimation;