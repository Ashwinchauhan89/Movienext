import React, { use, useEffect, useState } from 'react'
import { dummyBookingData } from '../../assets/assets'
import Loading from '../../components/Loading'
import Title from '../../components/admin/Title'
import { Table } from 'lucide-react'
import { dateFormat } from '../../lib/dateFormat'
import BlurCircle from '../../components/BlurCircle'

const ListBookings = () => {

  const currency = import.meta.env.VITE_CURRENCY

  const [bookings, setBookings] = useState([])
  const [Isloading, setIsLoading] = useState(true)

  const getAllBookings = async () => {
    setBookings(dummyBookingData)
    setIsLoading(false)
  }

  useEffect(() => {
    getAllBookings()
  }, [])

  return !Isloading ? (
    <div> 
      <BlurCircle/>
      
      <Title text1="List " text2="Bookings" />
      <div className='max-w-4xl mt-6 overflow-x-auto'>

        <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
          <thead>
            <tr className=' text-left text-pink-800  bg-secondary/20 '>
              <th className='p-2 min-w-45 pl-5'>User Name</th>
              <th className='p-2 min-w-45'>Movie Name</th>
              <th className='p-2 min-w-45'>Show Time</th>
              <th className='p-2 min-w-45'>Seats</th>
              <th className='p-2 min-w-45'>Amount</th>


            </tr>
          </thead>
          <tbody className='text-sm font-light'>
            {bookings.map((item, index) => (
              <tr key={index} className='border-b border-secondary/20 hover:bg-secondary/10'>
                <td className='p-2 min-w-45 pl-5'>{item.user.name}</td>
                <td className='p-2'>{item.show.movie.title}</td>
                <td className='p-2'>{dateFormat(item.show.showDateTime)}</td>
                <td className='p-2'>{Object.keys(item.bookedSeats).map(seat => item.bookedSeats[seat]).join(", ")}</td>
                <td className='p-2'>{currency}{item.amount}</td>
              </tr>
            ))}
          </tbody>



        </table>
      </div>

    </div>
  ) : <Loading />
}

export default ListBookings