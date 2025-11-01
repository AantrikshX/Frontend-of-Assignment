
import Card from './card'
import React, { useEffect, useState } from 'react'
import {getEvents} from "../API/events"
const section2 = () => {
    const [data , setData] = useState(null)

  useEffect(()=>{
    getEvents().then(events=>setData(events))
  },[])
  return (
    <div className='w-full   ' >
        <div className='carousel  flex     w-full h-120 ' >
            <div className='cardcont flex justify-around flex-wrap gap-10' >
                {
                    data ? data.map((e)=><Card title={e.title} key={e._id} id={e._id} location = {e.location} image ={e.image} date={e.date} />): (
            <div className="flex flex-col w-full ml-170 items-center justify-center  mt-20">
              <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-3 text-gray-600 font-semibold text-sm">
                Fetching events...
              </p>
            </div>
          )
                }
            <div className='footer w-full h-20' ></div>

            </div>
        </div>
    </div>
  )
}

export default section2