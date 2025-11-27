import Link from 'next/link'
import { Home, Heart, Undo2, Settings } from 'lucide-react'

export default function SideBar() {
	return (
		<aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-60 overflow-y-auto bg-dark hide-scrollbar">
			<nav className="flex h-full flex-col px-4 py-6">
				{/* Navigation Items */}
				<div className="flex-1 space-y-1">
					<Link href="/" className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-secondary hover:bg-dark-hover">
						<Home className="mr-3 h-5 w-5" strokeWidth={2} />
						전체 방송
					</Link>

					<Link href="/favorites" className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-secondary hover:bg-dark-hover">
						<Heart className="mr-3 h-5 w-5" strokeWidth={2} />
						팔로잉
					</Link>

					<div className="border-t border-gray-700 mt-4"></div>

					<div className="mt-4 pl-1 pr-1s flex justify-between items-center">
						<div className="text-xs font-semibold text-tertiary">팔로잉 채널</div>
						<div className="p-1 hover:bg-dark-hover rounded-lg cursor-pointer">
							<Undo2 className="h-3 w-3 text-tertiary" strokeWidth={2} />
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-700 pt-4">
					<Link href="/settings" className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-400 hover:bg-dark-hover">
						<Settings className="mr-3 h-5 w-5" strokeWidth={1.5} />
						Settings
					</Link>
				</div>
			</nav>
		</aside>
	)
}
