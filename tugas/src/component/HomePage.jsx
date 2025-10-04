import React from 'react'
import Test from "../assets/image/as.jpg"

const L = () => {
  return (
    <div className="border bg-sky-500">
      <div className="text-center font-bold text-5xl">SMK
        <div className="text-center font-bold text-3xl mr-5">Bina Nusantara Semarang
        </div>
      </div>
      <div className="flex justify-center h-100 w-100 ml-119">
        <img src={Test} alt="vf" />
      </div>
      <div className="flex justify-center border h-20  mb-80 mr">

      <div className="border-1 mr-200">Jurusan 
         </div>

      <div className="border-1 mr-70">TKJ
      
      </div>
      </div>
    </div>

  )
}

export default HomePage