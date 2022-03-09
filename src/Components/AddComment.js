import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { database } from "../firebase";

function AddComment({ userData, postData }) {
	const [text, setText] = useState("");
	const handleClick = () => {
		let obj = {
			text: text,
			uProfileImage: userData.profileUrl,
			uName: userData.fullname,
		};

		database.comments.add(obj).then((doc) => {
			console.log(doc.id);
			database.posts.doc(postData.postId).update({
				comments: [...postData.comments, doc.id],
			});
		});
		setText("");
	};
	return (
		<div style={{ width: "100%" }}>
			<TextField
				id="outlined-basic"
				label="Comment"
				variant="outlined"
				size="small"
				value={text}
				sx={{ width: "70%" }}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<Button variant="contained" onClick={handleClick}>
				Post
			</Button>
		</div>
	);
}
export default AddComment;
