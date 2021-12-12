import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import UploadFile from "./UploadFile";
import { database } from "../firebase";

export default function Feed() {
	const { user, logout } = useContext(AuthContext);
	const [userData, setUserData] = useState("");

	useEffect(() => {
		//onSnapshot => ek type of event listener hain
		//jab bhi us object mei change aaega, toh onSnapshot function chal gaega
		console.log(user);
		const unsub = database.users.doc(user.uid).onSnapshot((snapshot) => {
			setUserData(snapshot.data());
		});
		return () => {
			unsub();
		};
		//for new user
	}, [user]);
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<div style={{ width: "50%" }}>
				<h1>Welcome to Feed</h1>
				<button onClick={logout}>Logout</button>
			</div>
			<UploadFile user={userData} />
		</div>
	);
}