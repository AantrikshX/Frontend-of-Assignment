import React, { useState } from 'react'
import axios from 'axios'

const create = () => {
  const [imageFile, setImageFile] = useState(null); // ✅ added this line

  const submithandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("title", event.target.title.value);
    formData.append("description", event.target.description.value);
    formData.append("location", event.target.location.value);
    formData.append("date", event.target.date.value);
    formData.append("maxParticipants", event.target.maxParticipants.value);
    formData.append("currentParticipants", event.target.currentParticipants.value);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/events`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      event.target.reset();
      setImageFile(null); // ✅ reset image after submit
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex relative h-250 w-full justify-center'>
      <a href="/" className='cursor-pointer absolute left-20 top-5 text-green-600'>← Go Back</a>
      <h1 className='bg-white absolute left-120 text-3xl top-5 host font-medium text-green-600'>Host Your event</h1>
      <div className='w-150 h-215 border mt-10 rounded-md p-10 border-zinc-300 shadow'>
        <form onSubmit={submithandler} className='flex flex-col gap-2' encType='multipart/form-data'>
          <label className='text-xl mt-2' htmlFor="image">Image</label>
          <input type="file" onChange={(e) => setImageFile(e.target.files[0])} name='image' className='inline-block w-55 p-2 cursor-pointer bg-white border border-gray-300 rounded-lg' />
          <label className='text-xl mt-2' htmlFor="title">Title</label>
          <input type="text" name='title' placeholder='Event name' className='border border-gray-300 px-2 py-2 w-60 rounded-md' />
          <label className='text-xl mt-2' htmlFor="description">Description</label>
          <textarea type="text" name='description' placeholder='Description about your event' className='border border-gray-300 px-2 py-2 w-70 h-30 rounded-md' />
          <label className='text-xl mt-2' htmlFor="location">Location</label>
          <input type="text" name='location' placeholder='Your Event Loaction' className='border border-gray-300 px-2 py-2 w-70 rounded-md' />
          <label className='text-xl mt-2' htmlFor="date">Event Date</label>
          <input type="date" name='date' placeholder='date' className='border border-gray-300 px-2 py-2 w-50 rounded-md' />
          <label className='text-xl mt-2' htmlFor="maxParticipants">Maximum Participants</label>
          <input type="number" name='maxParticipants' placeholder='eg.100' className='border border-gray-300 px-2 py-2 w-70 rounded-md' />
          <label className='text-xl mt-2' htmlFor="currentParticipants">Current Participants</label>
          <input type="number" name='currentParticipants' placeholder='eg.15' className='border border-gray-300 px-2 py-2 w-70 rounded-md' />
          <input type="submit" value="Create" className='bg-green-600 cursor-pointer text-xl font-semibold text-white w-25 ml-50 mt-3 h-10 rounded-full inline-block' />
        </form>
      </div>
    </div>
  )
}

export default create
