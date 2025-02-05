import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Contact = () => {
  return (
    <div>
      <Header/>
      <div className="flex flex-col px-2 py-6 bg-[#EED9C4] border-x-4 border-x-[#2E1B12] lg:h-[70vh]">
        <h1 className='text-center text-2xl font-semibold'>Contact Us</h1>
        <br />
        <h3 className="text-center font-semibold">Contact No:  132234535</h3>
        <h3 className='text-center font-semibold'>Email: sfbhewjib@gmail.com</h3>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod culpa ipsum, aliquam accusantium obcaecati cupiditate quidem impedit sint consequuntur et, soluta odio ullam adipisci delectus unde ipsam! Natus, voluptate.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod culpa ipsum, aliquam accusantium obcaecati cupiditate quidem impedit sint consequuntur et, soluta odio ullam adipisci delectus unde ipsam! Natus, voluptate.</p>
        <br />
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
