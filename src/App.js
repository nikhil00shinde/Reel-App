import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Feed from "./Components/Feed";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Components/Profile";
import Ioa from "./Components/Ioa";

function App() {
	return (
		// React Router dom ka version 5.1.2 hain esliye switch use karne se problem nhi aayega
		<BrowserRouter>
			<AuthProvider>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<Route path="/profile/:id" component={Profile} />
					<PrivateRoute path="/" component={Feed} />
				</Switch>
			</AuthProvider>
		</BrowserRouter>
		// <Ioa />
	);
}

export default App;

//npm i @mui/material @emotion/styled react-router-dom @material-ui/icons pure-react-carousel

//export default-> jkoi bhi naam se file aap import kar sakte ho
//export -> is naam se variable ya function bna hain usi naam se import krna hota hain
