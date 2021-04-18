export default function Contact() {
	return (
		<>
			<div className="max-w-7xl mx-auto m-5">
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1 bg-white shadow">
						<div className="ml-8 mr-8 px-4 py-5 space-y-6 sm:px-0 sm:p-6">
							<h3 className="text-lg font-medium leading-6 text-gray-900">Resumen</h3>
							<p className="mt-1 text-sm text-gray-600">
								Somos estudiantes de último semestre de Psicología, escríbemos para que nos pongamos en contacto contigo, no dudes en dejar tus datos!
                </p>
						</div>
					</div>
					<div className="mt-5 md:mt-0 md:col-span-2">
						<form>
							<div className="shadow sm:rounded-md sm:overflow-hidden">
								<div className="px-4 py-5 bg-white space-y-6 sm:p-6">

									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
												Nombre
                        </label>
											<div className="mt-1 flex rounded-md shadow-sm">
												<input
													type="text"
													name="company_website"
													id="company_website"
													className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
												/>
											</div>
										</div>
									</div>

									<div className="grid grid-cols-3 gap-6">
										<div className="col-span-3 sm:col-span-2">
											<label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
												Email
                        </label>
											<div className="mt-1 flex rounded-md shadow-sm">
												<input
													type="text"
													name="company_website"
													id="company_website"
													className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
													placeholder="you@example.com@"
												/>
											</div>
										</div>
									</div>

									<div>
										<label htmlFor="about" className="block text-sm font-medium text-gray-700">
											Mensaje
                      </label>
										<div className="mt-1">
											<textarea
												id="about"
												name="about"
												rows={3}
												className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
												defaultValue={''}
											/>
										</div>										
									</div>
								</div>
								<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
									<button
										className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Enviar
                    </button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
