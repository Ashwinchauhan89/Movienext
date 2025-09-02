import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-[80vh]'>
        <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-pink-700'></div>
    </div>
  )
}

export default Loading