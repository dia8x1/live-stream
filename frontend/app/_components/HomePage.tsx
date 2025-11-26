import NavBar from '@/components/layout/NavBar'
import { Fragment } from 'react/jsx-runtime'

export default function HomePage() {
	return (
		<Fragment>
			<NavBar />

			<h1 className="text-4xl font-bold text-gray-900 dark:text-white">Home Page</h1>
			<p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Welcome to your Next.js application</p>
		</Fragment>
	)
}
