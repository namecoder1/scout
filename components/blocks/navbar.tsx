const Navbar = () => {
	return (
		<header>
			<div className='flex items-center w-1/2 justify-between mt-1 mx-1'>
				<a href="/" className='text-[#1CA95B]'>{`<<`} Vai al sito CNGEI</a>
				<img src="./media/logo-cngei.png" alt="Logo CNGEI" width={40} height={40} />
			</div>
			<nav className='py-2 w-full relative -z-0'>
				<img src='./media/header.jpg' alt='Image' width={40} height={40} className='w-screen max-h-[300px] object-cover' />
				<div className='absolute top-2 bottom-2 right-0 left-0 max-w-[1550px] mx-auto text-white flex'>
					<div className='min-w-[300px] h-fit bg-green-600/70 flex items-center justify-center min-h-full'>
						<img src='./media/logo_esploratori.png' alt='Logo Esploratori' width={150} height={150} className='w-[150px]' />
					</div>
					<div className='border-[2px] border-dashed border-y-0 border-x-white ml-10 mr-20 col-span-3 w-full'>
					<div className='absolute top-0 bottom-full left-0 right-0 bg-black/40 z-10 w-full'>
						<div className='flex flex-wrap justify-center gap-10 w-full bg-black/40 py-3.5 text-[14px] font-medium text-white'>
								<a href="/">HOME</a>
								<a href="/">IL METODO DI BRANCA E</a>
								<a href="/">LA PATTUGLIA NAZIONALE</a>
								<a href="/">TECNICAMP CNGEI</a>
								<a href="/">MANUALI PER ESPLORATORI</a>
							</div>
					</div>

					</div>
				</div>
			</nav>
		</header>
	)
}

export default Navbar

