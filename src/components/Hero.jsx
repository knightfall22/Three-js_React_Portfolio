import {motion} from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='mx-auto h-screen w-full relative'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] flex flex-row mx-auto items-start max-w-7xl `}>
        <div className='flex-col flex justify-center items-center mt-5 '>
          <div className='rounded-full w-5 h-5 bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient '/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi I'm <span className='text-[#915eff]'>Bolaji</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            I develop 3D visuals, user <br className='sm:block hidden'/>
             interface and web applications.
          </p>
        </div>
      </div>
        <ComputersCanvas />

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
          <a href="#about">
            <div className='w-[29px] h-[57px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
              <motion.div 
                animate={{
                  y: [0,24,0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: 'infinity',
                  repeatType:'loop',
                }}

                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>  
    </section>
  )
}

export default Hero