import React from 'react'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'

export default function Footer() {
  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-3 gap-4 text-white max-w-7xl mx-auto bg-indigo-700 p-5 rounded-lg">
        <div className="justify-self-end">
          <p>2020 Mental Health Up. All rights reserved</p>
        </div>
        <div className="md:flex justify-self-end">
          <div className="md:flex-1 text-right">
            <button>Terminos de servicio</button>
          </div>
          <div className="md:flex-1 text-right">
            <button>Política de privacidad</button>
          </div>
        </div>
        <div className="flex justify-self-end">
          <button className="px-2">
            <AiOutlineInstagram className="h-6 w-6" />
          </button>
          <button className="px-2">
            <AiOutlineFacebook className="h-6 w-6" />
          </button>
          <button className="px-2">
            <AiOutlineTwitter className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  )
}