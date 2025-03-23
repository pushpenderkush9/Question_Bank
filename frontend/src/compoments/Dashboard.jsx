import React from 'react'


export default function Dashboard() {
  return (
    <>
      <div className='flex justify-between mt-30 p-8 flex-row flex-row-reverse  sm:flex-row  '>
        <div className=' sm:text-center  text-left  '>
          <h1 className=' font-bold ml-0 sm:ml-10 sm:mr-5 sm:text-7xl m-10 '>World's one of the <br />Best Question Paper store</h1>
          <button className='text-center text-2xl  mt:40  sm:mt-35 sm:mt-0 rounded bg-green-500 p-3 shadow-[10px_20px_0px_rgba(50,0,0,2)] ' >Lets get started </button>
          </div>
          <img src='./homepage.jpg' className='h-120 w-full object-cover mr-5 sm:mr-25 md:h-120 md:w-100 '/>
      </div>
    
    </>
  )
}
