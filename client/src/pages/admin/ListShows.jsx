import React, { useEffect, useState } from 'react'
import { dummyShowsData } from '../../assets/assets'
import Loading from '../../components/Loading'
import Title from '../../components/admin/Title'
import { dateFormat } from '../../lib/dateFormat'
import { Underline } from 'lucide-react'
import BlurCircle from '../../components/BlurCircle'

const ListShows = () => {

  const currency = import.meta.env.VITE_CURRENCY

  const [shows , setShows] = useState([])
   const [loading , setLoading] = useState(true)

  const getAllShows = async() =>{
    try {
      setShows([{
        movie : dummyShowsData[0],
        showDateTime : "2023-10-10T10:00:00",
        showPrice : 10,
        occupiedSeats : {
          A1 : "user1",
          B2 : "user2",
          C1 : "user3"
        }
      }]);
      setLoading(false)

    }
    catch(error){
       console.log(error)
    }
  }

  useEffect(()=>(
    getAllShows()
  ),[])


  



  return !loading ? (
    <div>
      <BlurCircle/>
       
      <Title text1="List " text2="Shows"/>
      <div className='max-w-4xl mt-6 overflow-x-auto'>
        
        <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
          <thead>
            <tr className=' text-left text-pink-800  bg-secondary/20 '>
              <th className='p-2 min-w-45 pl-5'>Movie Name</th>
              <th className='p-2 min-w-45'>Show Time</th>
              <th className='p-2 min-w-45'>Total Bookings</th>
              <th className='p-2 min-w-45'>Earnings</th>
              

            </tr>
          </thead>
          
          <tbody className='text-sm font-light'>
            {shows.map((show, index) =>(
              <tr key={index} className='border-b border-secondary/20 hover:bg-secondary/10'>
                <td className='p-2 min-w-45 pl-5'>{show.movie.title}</td>
                <td className='p-2'>{dateFormat(show.showDateTime)}</td>
                <td className='p-2'>{Object.keys(show.occupiedSeats).length}</td>
                <td className='p-2'>{currency} {Object.keys(show.occupiedSeats).length * show.showPrice}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  ) : <Loading/>
}

export default ListShows