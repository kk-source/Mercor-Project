import logo from './logo.svg';
import './App.css';
import MyComponent from './components/section1';
import Header from './components/header';
import MyComponent2 from './components/section2';

function App() {
	
	return (
		<div className="App">
			<MyComponent />
			<MyComponent2 />
			<Header />
		</div>
	);
}

export default App;
