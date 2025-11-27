import NavBar from '@/components/layout/NavBar'
import SideBar from '@/components/layout/SideBar'
import { Fragment } from 'react/jsx-runtime'

export default function HomePage() {
	return (
		<Fragment>
			<NavBar />
			<SideBar />

			<div className="ml-64 mt-16 p-8 h-[calc(100vh*4)]">
				<div className="">
					<h1 className="text-4xl font-bold ">Home Page</h1>
					<p className="mt-4 text-lg">Welcome to your Next.js application</p>
				</div>
			</div>
		</Fragment>
	)
}
