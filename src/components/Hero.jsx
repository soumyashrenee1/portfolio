import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
<section className="relative w-full h-[40vh] mx-auto px-6">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-40 h-10 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className='text-[#915EFF]'>Soumya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}><br />
            Software Delevopment | Machine Learning | AI | Cloud <br className='sm:block hidden' />
            
          </p>
        </div>
      </div>

     

       
    </section>
  );
};

export default Hero;
