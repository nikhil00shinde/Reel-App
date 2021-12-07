import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import "./Signup.css";
import insta from "../Assets/Instagram.JPG";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { Link } from "react-router-dom";

export default function Signup() {
	//agar component ke liye css likhna hain toh humhe useStyles se makeStyles wala function call karna padega
	const useStyles = makeStyles({
		text1: {
			color: "grey",
			textAlign: "center",
		},
		card2: {
			height: "5.6vh",
			marginTop: "2%",
		},
	});
	//ye classes naam ka object hain jisse hum style de sakte hain apne component ko
	const classes = useStyles();
	
	return (
		<div className="signupWrapper">
			<div className="signupCard">
				<Card variant="outlined">
					<div className="insta-logo">
						<img src={insta} alt="Instagram Logo" />
					</div>
					<CardContent>
						<Typography className={classes.text1} variant="subtitle1">
							Sign up to see photos and videos from your friends
						</Typography>
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
						<TextField
							id="outlined-basic"
							label="Full Name"
							variant="outlined"
							size="small"
							margin="dense"
							fullWidth={true}
						/>
						<Button
							size="small"
							color="secondary"
							fullWidth={true}
							margin="dense"
							variant="outlined"
							startIcon={<CloudUploadIcon />}
							component="label"
						>
							Upload Profile Images
							<input type="file" accept="image/*" hidden />
						</Button>
					</CardContent>

					<CardActions>
						<Button
							size="small"
							color="primary"
							variant="contained"
							fullWidth={true}
						>
							Sign up
						</Button>
					</CardActions>
					<CardContent>
						<Typography className={classes.text1} variant="subtitle1">
							By Signing up, you agree to our Terms, Condition and Cookies
							policy.
						</Typography>
					</CardContent>
				</Card>
				<Card variant="outlined" className={classes.card2}>
					<CardContent>
						<Typography className={classes.text1} variant="subtitle1">
							Having an account?{" "}
							<Link to="/login" style={{ textDecoration: "none" }}>
								Login
							</Link>
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
