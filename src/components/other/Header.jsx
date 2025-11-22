import React from 'react'

function Header({data}) {
  console.log(data);
  return (
    <div className=' p-2 rounded-2xl flex items-center justify-between'>

        <h1 className='font-bold text-2xl'>Hello <br />{data.firstName}👋</h1>
        <button className=' p-2 rounded-2xl text-xl bg-red-600 text-white cursor-pointer w-50 '>LogOut</button>
    </div>
  )
}

export default Header 