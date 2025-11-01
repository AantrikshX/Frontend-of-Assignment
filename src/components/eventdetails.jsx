import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/events/${id}`)
      .then((res) => setEvent(res.data.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!event) return (
            <div className="flex flex-col items-center justify-center mt-20">
              <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-3 text-gray-600 font-semibold text-sm">
                Fetching event details...
              </p>
            </div>
          )

  return (
    <div className="flex relative  p-10">
        <a href="/" className='cursor-pointer absolute left-20 top-5 text-green-600'>← Go Back</a>
      <img src={event.image} alt={event.title} className="w-100 h-80 absolute right-10 object-cover rounded-lg shadow-lg" />
      <h1 className="text-3xl absolute font-bold mt-15 left-5">{event.title}</h1>
      <h1 className="text-xl font-bold absolute top-40" >📍Location:</h1>
      <p className="text-gray-500 absolute top-41 left-40">{event.location}</p>
      <h1 className="absolute top-52 text-2xl font-semibold" >📃About Event</h1>
      <p className="mt-3 text-lg absolute top-60 left-15 w-150">➥ {event.description}</p>
      <p className="mt-3 absolute top-103 text-2xl font-bold ">📅Date:</p>
      <p className="absolute mt-3 top-104 text-xl left-34 font-medium " >{new Date(event.date).toDateString()}</p>
      <p className="absolute top-115 font-bold text-xl" >📈 Max Participants:</p>
      <p className="absolute top-115 font-medium text-xl left-60" >{event.maxParticipants}</p>
      <p className="absolute top-123 font-bold text-xl" >🏆Current Participants:</p>
      <p className="absolute top-123 font-medium text-xl left-66" >{event.currentParticipants}</p>
      <p className="absolute top-93 font-semibold text-xl right-70" >Created At:</p>
      <p className="text-gray-500 absolute top-94 right-39">{new Date(event.createdAt).toDateString()}</p>


    </div>

  );
};

export default EventDetails;
