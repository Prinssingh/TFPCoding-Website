// import ErrorModules from '@/modules/Error';
// import Footer from '@/components/Footer';
// import HeaderTwo from '@/components/Header/HeaderTwo';
import ErrorModules from './modules/Error/index';
import Footer from './components/Footer/index';
import HeaderTwo from './components/Header/HeaderTwo';

export default function Home() {
	return (
		<>
			<HeaderTwo />
			
			<ErrorModules />
			<h1>Hello</h1>
			
			<Footer />
		</>
	)
}