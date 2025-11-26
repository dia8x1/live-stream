import Link from 'next/link'

export default function NavBar() {
	return (
		<nav className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
							MyApp
						</Link>
					</div>

					{/* Navigation Links */}
					{/* <div className="hidden md:block">
						<div className="flex items-center space-x-4">
							<Link href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
								Home
							</Link>
							<Link href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
								About
							</Link>
							<Link href="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
								Contact
							</Link>
						</div>
					</div> */}

					{/* Mobile menu button */}
					<div className="inline-flex items-center justify-center rounded-md p-2">
						<div className="w-10 h-10 bg-gray-200 rounded-full cursor-pointer"></div>
					</div>
				</div>
			</div>
		</nav>
	)
}
