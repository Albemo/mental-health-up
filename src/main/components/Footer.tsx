import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="flex text-white max-w-7xl mx-auto m-5 bg-indigo-700 p-16 rounded-lg">
        
          <div className="flex-auto">
            <p className="">2020 Mental Health Up Company. Todos los derechos reservados </p>
          </div>
          <div className="flex-auto flex">
            <div className="flex-auto">
              <button>
                <h1>Terminos de servicio</h1>
              </button>
            </div>
            <div className="flex-auto">
              <button>
                <h1>Política de privacidad</h1>
              </button>
            </div>
            <div className="flex-auto">
              <button>
                <h1>Seguridad</h1>
              </button>
            </div>
          </div>
        </div>
    </>
  )
}