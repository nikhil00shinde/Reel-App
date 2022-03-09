import React from "react";

function Ioa() {
	const callback = (entries) => {
		entries.forEach((entry) => {
			let ele = entry.target.childNodes[0];

			ele.play().then(() => {
				if (!ele.paused && !entry.isIntersecting) {
					ele.pause();
					console.log(
						"🚀 ~ file: Ioa.js ~ line 7 ~ entries.forEach ~ ele",
						ele
					);
				}
			});
		});
	};

	let observer = new IntersectionObserver(callback, { threshold: 0.6 });

	React.useEffect(() => {
		const elements = document.querySelectorAll(".videos");

		elements.forEach((entry) => {
			observer.observe(entry);
		});
	}, []);

	return (
		<div className="video-container">
			<div className="videos">
				<video
					muted="muted"
					src="https://firebasestorage.googleapis.com/v0/b/reel-62ffc.appspot.com/o/posts%2F9503d6df-2872-4123-b75d-aa4237a21df9%2Fproduction%20ID_4275773.mp4?alt=media&token=00aca4f1-df0a-46c4-b44c-f07589133103"
					style={{ height: "85vh", width: "20vw" }}
				/>
			</div>
			<div className="videos">
				<video
					muted="muted"
					src="https://firebasestorage.googleapis.com/v0/b/reel-62ffc.appspot.com/o/posts%2F9503d6df-2872-4123-b75d-aa4237a21df9%2Fproduction%20ID_4275773.mp4?alt=media&token=00aca4f1-df0a-46c4-b44c-f07589133103"
					style={{ height: "85vh", width: "20vw" }}
				/>
			</div>{" "}
			<div className="videos">
				<video
					muted="muted"
					src="https://firebasestorage.googleapis.com/v0/b/reel-62ffc.appspot.com/o/posts%2F9503d6df-2872-4123-b75d-aa4237a21df9%2Fproduction%20ID_4275773.mp4?alt=media&token=00aca4f1-df0a-46c4-b44c-f07589133103"
					style={{ height: "85vh", width: "20vw" }}
				/>
			</div>
		</div>
	);
}

export default Ioa;
