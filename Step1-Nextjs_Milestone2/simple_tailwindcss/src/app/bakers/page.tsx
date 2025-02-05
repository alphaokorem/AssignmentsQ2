import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Bakers = () => {
  return (
    <>
    <Header/>
    <div className="py-6 bg-[#EED9C4] border-x-4 border-x-[#2E1B12] lg:[h-70vh]">
      <h1 className="text-2xl text-center pb-6 font-semibold">Our Bakers</h1>
      <div className="flex flex-col px-2 ">
        <img src="https://www.yourfreecareertest.com/wp-content/uploads/2017/05/baker.jpg" alt="" className=''/>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod culpa ipsum, aliquam accusantium obcaecati cupiditate quidem impedit sint consequuntur et, soluta odio ullam adipisci delectus unde ipsam! Natus, voluptate.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod culpa ipsum, aliquam accusantium obcaecati cupiditate quidem impedit sint consequuntur et, soluta odio ullam adipisci delectus unde ipsam! Natus, voluptate.</p>
        <br />
      </div>
    </div>
    
    <Footer/>  
      
    </>
  )
}

export default Bakers
