/* eslint-disable react/react-in-jsx-scope */
import { motion } from "framer-motion";


function FloatingDiv({ delay, bgImg, initx1, initx2 }) {
    return (
      <motion.div
        style={{

          width: 150,
          height: 150,
          borderRadius: 8,
          margin: 10,
          backgroundImage: bgImg,
          backgroundSize: 100
        }}
        animate={["initial"]}
        variants={{

          rotate: {
            rotate: [null, -5, 5, 0],
            transition: {
              // delay,
              duration: 10
              // repeat: Infinity,
              // repeatDelay: 0.2,
              // repeatType: "reverse"
            }
          },
          initial: {
            x: [initx1, initx2],
            y: [0, 3],
            rotate: 10,
            transition: {
              delay,
              duration: 2,
              repeat: Infinity,
              // repeatDelay: 0.2,
              repeatType: "reverse"
            }
          }
        }}
      >
        <img width={100} src={bgImg}></img>
        </motion.div>
    );
  }
  export default FloatingDiv;