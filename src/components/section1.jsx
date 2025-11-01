import React from 'react'

const section1 = () => {
  return (
    <div className='w-full flex sec2 text-green-800 gap-5 flex-col p-20 justify-center items-center ' >
        <h1 className='text-4xl font-medium' >Host/Join</h1>
        <h1 className='text-3xl font-bold' >Events</h1>
        <a href="/create" className='bg-green-600 text-white px-5 py-3 text-2xl font-semibold rounded-full' >Host your event</a>
    </div>
  )
}

export default section1