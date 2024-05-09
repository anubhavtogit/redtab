import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex lg:justify-end'>
        <div className='flex items-center justify-center lg:flex-1 lg:order-2'>
            <img src="assets\puppy_phone.jpg" alt="dog" className='h-64 md:h-72 lg:h-[400px]'/>
        </div>
        <div className='lg:flex-1 lg:order-1'>
        <div className='flex flex-col gap-5 '>
            <h1 className='text-5xl font-bold font-playfair leading-tight'>We are Red_Tab We are dog lover</h1>
            <p className='font-lato text-gray-400'>we will take care of your dog any day any time for any time period. From Huskies to Labras we lovw everyone.</p>
            <form action="" className='flex flex-col gap-4 md:flex-row'>
                <input className='rounded-md px-4 py-3 placeholder:text-gray-400' type="email" placeholder='Enter your mail'/>
                <button className='rounded-md py-3 px-4 bg-blue-400 hover:bg-blue-600 text-white'>Join Red_Tab</button>
            </form>
        </div>
        <div className='flex gap-2'> 
            <img src="assets\blue_tick.svg" alt="bro" height="19px" width="19px"/>
            <p className='font-lato text-gray-400'>No spam.Unsubscribe anytime.</p>
        </div>
        </div>
    </div>
  )
}

export default Body