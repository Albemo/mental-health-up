import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<div className="shadow rounded-lg m-h-64 p-2 
 bg-white max-w-7xl mx-auto m-5 h-auto" style={{ fontFamily: 'Arvo serif' }}>
				<div className="transform hover:translate-y-2 hover:shadow-xl transition duration-300">

					<div>
						<p className="text-center p-5 text-5xl"><b>CONOCIENDO LA DEPRESIÓN</b></p>
						{/* <p classNameName="text-center">¡Por el Bienestar Mental y Emocional!</p> */}
					</div>
					<div>
						<p className="text-center text-3xl">¡Inscripciones Abiertas!</p>
					</div>
					<figure className="mb-2">
						<img src="https://www.semana.com/resizer/l3nb8VlEcQSgPgdMGJUiBC27I0s=/1200x675/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/semana/54FPOZXWVBFW7GTY7SMOHVSFHY.jpg" alt="" className="h-64 ml-auto mr-auto" />
					</figure>

					<div className="px-4 py-3  text-right sm:px-6">
						<Link to="/mental-health-up/course/1">
							<button
								className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Ver más
						</button>
						</Link>
					</div>
				</div>
			</div>



			<div className="flex items-center  shadow rounded-lg bg-white max-w-7xl mx-auto m-5 h-auto" style={{ fontFamily: 'Arvo serif' }}>
				<div className="container ml-auto mr-auto flex flex-wrap items-start">
					<div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
						<h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">Próximos cursos</h1>
					</div>

					<div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
						<div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
							<figure className="mb-2">
								<img src="https://static.diariofemenino.com/media/17755/c/ansiedad-por-primera-vez-que-me-esta-pasando-lg.jpg" alt="" className="h-64 ml-auto mr-auto" />
							</figure>
							<div className="rounded-lg p-2 bg-gray-200 flex flex-col">
								<div>
									<h5 className="text-gray-500 text-xl p-2 font-bold leading-none">
										Ansiedad
											</h5>
									{/* <span className="text-xs text-gray-400 leading-none">Brilliant. In every way.</span> */}
								</div>
								<div className="text-right">
									{/* <div className="text-lg text-white font-light">$1099,00</div> */}
									<Link to="/mental-health-up/course/2">

										<button
											className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Ver más
														</button>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
						<div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
							<figure className="mb-2">
								<img src="https://image.freepik.com/vector-gratis/chica-fobia-social-semi-ilustracion-plana_106317-277.jpg" alt="" className="h-64 ml-auto mr-auto" />
							</figure>
							<div className="rounded-lg p-2 bg-red-200 flex flex-col">
								<div>
									<h5 className="text-gray-500 text-xl p-2 font-bold leading-none">
										Fobia social
						</h5>
									{/* <span className="text-xs text-gray-400 leading-none">Brilliant. In every way.</span> */}
								</div>
								<div className="text-right">
									{/* <div className="text-lg text-white font-light">$1099,00</div> */}
									<Link to="/mental-health-up/course/3">
										<button
											className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Ver más
									</button>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
						<div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
							<figure className="mb-2">
								<img src="https://fococonsultores.es/wp-content/uploads/2018/12/inteligencia-emocional.jpg" alt="" className="h-64 ml-auto mr-auto" />
							</figure>
							<div className="rounded-lg p-2 bg-gray-200 flex flex-col">
								<div>
									<h5 className="text-gray-500 text-xl p-2 font-bold leading-none">
										Regulación emocional
						</h5>
									{/* <span className="text-xs text-gray-400 leading-none">Brilliant. In every way.</span> */}
								</div>
								<div className="text-right">
									{/* <div className="text-lg text-white font-light">$1099,00</div> */}
									<Link to="/mental-health-up/course/4">
										<button
											className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Ver más
									</button>
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
						<div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
							<figure className="mb-2">
								<img src="https://www.fundacionmlc.org/wp-content/uploads/2014/11/DEFINICION.jpg" alt="" className="h-64 ml-auto mr-auto" />
							</figure>
							<div className="rounded-lg p-2 bg-red-200 flex flex-col">
								<div>
									<h5 className="text-gray-500 text-xl p-2 font-bold leading-none">
										Duelo
</h5>
									{/* <span className="text-xs text-gray-400 leading-none">Brilliant. In every way.</span> */}
								</div>
								<div className="text-right">
									{/* <div className="text-lg text-white font-light">$1099,00</div> */}
									<Link to="/mental-health-up/course/5">
									<button
										className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
										Ver más
</button>
										</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
						<div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
							<figure className="mb-2">
								<img src="https://infantaleonorprimero.files.wordpress.com/2012/03/boceto2.jpg" alt="" className="h-64 ml-auto mr-auto" />
							</figure>
							<div className="rounded-lg p-2 bg-gray-200 flex flex-col">
								<div>
									<h5 className="text-gray-500 text-xl p-2 font-bold leading-none">
										Habilidades sociales
						</h5>
									{/* <span className="text-xs text-gray-400 leading-none">Brilliant. In every way.</span> */}
								</div>
								<div className="text-right">
									{/* <div className="text-lg text-white font-light">$1099,00</div> */}
									<Link to="/mental-health-up/course/6">
									<button
										className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
										Ver más
									</button>
										</Link>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	)
}