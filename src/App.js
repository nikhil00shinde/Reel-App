import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		// React Router dom ka version 5.1.2 hain esliye switch use karne se problem nhi aayega
		<BrowserRouter>
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
		</BrowserRouter>
	);
}

export default App;

//npm i @mui/material @emotion/styled react-router-dom @material-ui/icons pure-react-carousel
