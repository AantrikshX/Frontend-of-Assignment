import { useNavigate } from "react-router-dom";

const card = (props) => {
     const navigate = useNavigate();
  
  return (
    <div>
        <div onClick={() => navigate(`/event/${props.id}`)} className='card w-100 h-100 rounded-lg shadow-xl relative  transition-transform duration-300 hover:shadow-2xl hover:scale-101' >
                <div className='w-full absolute top-15 shadow h-55 ' ><img src={props.image} alt="Event" className='w-full h-56 object-cover ' /></div>
                <div className='date w-12 rounded-xl shadow flex flex-col   items-center pt-3 absolute z-10 left-5 h-16 bg-gray-100 bottom-20 ' >
                    <h1 className='text-xl font-bold' >{new Date(props.date).getDate()}</h1>
                    <h1 className='font-extrabold text-red-500 text-xs ' >{new Date(props.date).toLocaleString('en-US', { month: 'short' })}</h1>
                </div>
                <div className='absolute bottom-12 px-2 ' ><h1 className='font-bold text-xl' >{props.title}</h1></div>
                <div className='absolute bottom-6 px-2 ' ><h1 className='text-gray-500' >{props.location}</h1></div>
                {/* <p>{props.image ? props.image.slice(0, 100) + "..." : "No image data"}</p> */}

            </div>
    </div>
  )

}
export default card