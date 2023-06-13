import { Tilt } from "react-tilt"
import {motion} from 'framer-motion'

import {styles} from '../styles'
import { SectionWrapper } from "../hoc"
import emailjs from '@emailjs/browser'
import {EarthCanvas} from './canvas'
import { slideIn } from "../utils/motion"
import { useRef, useState } from "react"

const Contact = () => {
  
  const initialState = {
    name: '',
    email: '',
    message: ''
  }
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(initialState)

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // template_wbm475c
// service_mug04lf
// Ky5OtLHHEJSq38iuk

    emailjs.send('service_mug04lf', 'template_wbm475c',
      { 
        from_name: form.name,
        to_name: 'Bolaji',
        from_email: form.email, 
        to_email: 'pelumi066@gmail.com',
        message: form.message
      },
      'Ky5OtLHHEJSq38iuk')
      .then(() => {
        setLoading(false)
        alert("Thank you for your message, i will get back to shorty!")
        setForm({...initialState})
      })
      .catch((err) => {
        setLoading(false)
        console.log(err);
        alert("Sorry, there was an error sending your message. Please try again")
      })
  }


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', .2, 1)}
        className=" bg-black-100 flex-[.75] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
         <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Name</span>
            <input 
              type="text" 
              name="name" 
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
         </label>
         <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Email</span>
            <input 
              type="text" 
              name="email" 
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
         </label>
         <label className="flex flex-col">
            <span className="text-white font-medium mb-4 ">Your Message</span>
            <textarea 
              rows={7}
              name="message" 
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
         </label>

         <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-white shadow-md shadow-primary rounded-xl"
         >
          {loading ? 'Sending...': 'Send'}
         </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', .2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")