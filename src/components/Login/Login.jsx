import {
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [registerError, setRegisterError] = useState("");
	const [success, setSuccess] = useState("");
	const emailRef = useRef(null);

	const hanldleLogIn = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(email, password);

		// reset error
		setRegisterError("");
		setSuccess("");

		// Add validation
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				console.log(result.user);
				setSuccess("User Logged In Successfully.");
			})
			.catch((error) => {
				console.error(error);
				setRegisterError(error.message);
			});
	};

	const handleForgetPassword = () => {
		const email = emailRef.current.value;
		if (!email) {
			console.log("Please provide an email", emailRef.current.value);
			return;
		} else if (
			!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
		) {
			console.log("Please write a valid email");
			return;
		}

		// send validation email
		sendPasswordResetEmail(auth, email)
			.then(() => alert('please check your email'))
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti
						eaque aut repudiandae et a id nisi.
					</p>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form onSubmit={hanldleLogIn} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="text"
								name="email"
								ref={emailRef}
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
							<label className="label">
								<a
									onClick={handleForgetPassword}
									href="#"
									className="label-text-alt link link-hover"
								>
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
						{registerError && (
							<p className="text-red-700">{registerError}</p>
						)}
						{success && <p className="text-green-600">{success}</p>}
						<p>
							New to this website ? please{" "}
							<Link to="/register">Register</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
