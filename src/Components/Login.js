import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
	Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { makeStyles } from "@mui/styles";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import "./Login.css";
import insta from "../Assets/Instagram.JPG";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Link } from "react-router-dom";
import bg from "../Assets/insta.png";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import img5 from "../Assets/img5.jpg";

export default function Login() {
	const useStyles = makeStyles({
		text1: {
			color: "grey",
			textAlign: "center",
		},
		text2: {
			textAlign: "center",
		},
		card2: {
			height: "5.6vh",
			marginTop: "2%",
		},
	});
	const classes = useStyles();
	return (
		<div className="loginWrapper">
			<div
				className="imgcar"
				style={{ backgroundImage: "url(" + bg + ")", backgroundSize: "cover" }}
			>
				<div className="car">
					{/* Ye humne npm i pure-react-carousel se kiya hain */}
					{/* Image slider ke liye */}
					<CarouselProvider
						visibleSlides={1}
						naturalSlideWidth={238}
						naturalSlideHeight={423}
						totalSlides={5}
						hasMasterSpinner
						isPlaying={true}
						infinite={true}
						dragEnabled={false}
						touchEnabled={false}
					>
						<Slider>
							<Slide index={0}>
								<Image src={img1} />
							</Slide>
							<Slide index={1}>
								<Image src={img2} />
							</Slide>
							<Slide index={2}>
								<Image src={img3} />
							</Slide>
							<Slide index={3}>
								<Image src={img4} />
							</Slide>
							<Slide index={4}>
								<Image src={img5} />
							</Slide>
						</Slider>
					</CarouselProvider>
				</div>
			</div>
			<div className="loginCard">
				<Card variant="outlined">
					<div className="insta-logo">
						<img src={insta} alt="Instagram Logo" />
					</div>
					<CardContent>
						{true && (
							<Alert severity="error">
								This is an error alert — check it out!
							</Alert>
						)}
						<TextField
							id="outlined-basic"
							label="Email"
							variant="outlined"
							size="small"
							margin="dense"
							fullWidth={true}
						/>
						<TextField
							id="outlined-basic"
							label="Password"
							variant="outlined"
							size="small"
							margin="dense"
							fullWidth={true}
						/>
						<Typography
							className={classes.text2}
							variant="subtitle1"
							color="primary"
						>
							Forget Password ?
						</Typography>
					</CardContent>

					<CardActions>
						<Button
							size="small"
							color="primary"
							variant="contained"
							fullWidth={true}
						>
							Login
						</Button>
					</CardActions>
				</Card>
				<Card variant="outlined" className={classes.card2}>
					<CardContent>
						<Typography className={classes.text1} variant="subtitle1">
							Don't have an account ?{" "}
							<Link to="/signup" style={{ textDecoration: "none" }}>
								Signup
							</Link>
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
