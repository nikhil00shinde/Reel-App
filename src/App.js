import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";

function App() {
	return (
		// React Router dom ka version 5.1.2 hain esliye switch use karne se problem nhi aayega
		<BrowserRouter>
			<AuthProvider>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;

//npm i @mui/material @emotion/styled react-router-dom @material-ui/icons pure-react-carousel
