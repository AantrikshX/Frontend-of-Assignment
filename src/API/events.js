export const getEvents = async()=>{
   const response= await fetch(`${import.meta.env.VITE_API_URL}/api/events`,{
        method :'GET',

    })
    return await response.json()
}