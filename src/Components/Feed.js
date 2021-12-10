import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Feed() {
	const { logout } = useContext(AuthContext);
	return (
		<>
			<h1>Welcome to Feed</h1>
			<button onClick={logout}>Logout</button>
		</>
	);
}
