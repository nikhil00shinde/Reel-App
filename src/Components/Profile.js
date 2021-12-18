import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebase";
import CircularProgress from "@mui/material/CircularProgress";

function Profile() {
	const { id } = useParams();
	const [userData, setUserdata] = useState(null);
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		database.users.doc(id).onSnapshot((snap) => {
			setUserdata(snap.data());
		});
	}, [id]);

	useEffect(async () => {
		if (userData != null) {
			let parr = [];
			for (let i = 0; i < userData.postIds.length; i++) {
				let postData = await database.posts.doc(userData.postIds[i]).get();
				parr.push(postData.data());
			}
			setPosts(parr);
		}
	});
	return (
		<>
			{
				// posts==null || userData == null ?<CircularProgress/>
			}
		</>
	);
}

export default Profile;
