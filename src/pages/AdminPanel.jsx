import React from 'react'

const AdminPanel = ({ isLogin }) => {
  return (
    <div>
      {
        <div className='max-w-7xl mx-auto flex items-center justify-center py-20 max-sm:p-5 max-sm:pt-20'>
          <form action="" className='flex flex-col items-center justify-between p-20 w-1/2 max-sm:w-full  max-sm:p-3 gap-5 drop-shadow-lg shadow-md rounded-xl'>
            <h1 className='text-4xl font-mono font-bold'>Husan Art</h1>
            <input type="text" className={`border-2 rounded-lg px-6 py-3 w-full focus:border-blue-500 outline-none`}
              name="" id="" placeholder='Enter image name' />
            <input type="text" className={`border-2 rounded-lg px-6 py-3 w-full focus:border-blue-500 outline-none`}
              name="" id="" placeholder='Enter image description' />
            <label htmlFor="chooseFile" className={`border-2 shadow-sm rounded-lg px-6 py-3 w-full focus:border-blue-500 outline-none`}>
              select img
            </label>
            <input type="file" className='hidden'
              name="" id="chooseFile" placeholder='Enter image name' />
            <button className='w-full py-3 rounded-xl bg-[#131212] text-white'>Submit</button>
          </form>
        </div>
      }
    </div>
  )
}

export default AdminPanel