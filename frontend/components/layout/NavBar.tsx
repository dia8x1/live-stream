import Link from 'next/link'
import { Search } from 'lucide-react'

export default function NavBar() {
	return (
		<nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-md">
			<div className="mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<Link href="/" className="text-xl font-bold text-white">
							Live
						</Link>
					</div>

					{/* Search Bar */}
					<div className="relative sm:w-64 md:w-84 px-4">
						<input type="text" placeholder="검색" className="w-full pl-4 pr-10 rounded-full border border-tertiary bg-dark px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-400" />
						<Search className="absolute right-7 top-1/2 h-4 w-4 -translate-y-1/2 text-tertiary cursor-pointer" />
					</div>

					{/* Profile */}
					<div className="inline-flex items-center justify-center">
						<div className="w-9 h-9 bg-white rounded-full outline-blue-400 outline-3 cursor-pointer"></div>
					</div>
				</div>
			</div>
		</nav>
	)
}
