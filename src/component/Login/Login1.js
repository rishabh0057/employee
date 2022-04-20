import React, { useState } from "react";
import "../Login/Login.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

const Login1 = () => {
	let navigate = useNavigate();
	const [cookie, setCookie] = useCookies(["token"]);

	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const input = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(name, value);
		setData({ ...data, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// setData({  password: "" });

		axios
			.post("http://e41e-49-204-161-61.ngrok.io/api/auth/login", {
				...data,
			})
			.then((response) => {
				const dataa = response.data;
				console.log(dataa.message);
				if (dataa.message) {
					alert(dataa.message);
				}
				setCookie("token", dataa.data.token.token);
				console.log(response);
				navigate("/hr");
				e.target.reset();
			})
			.catch((error) => {
				console.log(error);
			});
		setData({ password: "" });
	};
	return (
		<div>
			<section
				className="gradient-form"
				style={{
					background: "linear-gradient(rgba(250,0,0,0.5),transparent",
				}}
			>
				<div className="container py-5 ">
					<div className="row d-flex justify-content-center align-items-center ">
						<div className="col-xl-10">
							<div className="card rounded-3 text-black">
								<div className="row g-0">
									<div className="col-lg-6">
										<div className="card-body p-md-5 mx-md-4">
											<Link
												className="text-center flower"
												to="/"
											>
												<img
													src={logo}
													style={{
														height: "100%",
														width: "50%",
													}}
													alt="logo"
												/>
												{/* <h4 className="mt-1 mb-5 pb-1">
													We are The Ethereal Team
												</h4> */}
											</Link>

											<br />
											<form>
												<br />
												{/* <p>
													Please login to your account
												</p> */}

												<div className="form-outline mb-4">
													<input
														type="email"
														value={data.email}
														onChange={input}
														name="email"
														id="email"
														className="form-control"
														placeholder="Phone number or email address"
													/>
													<label
														className="form-label"
														for="form2Example11"
													>
														Username
													</label>
												</div>

												<div className="form-outline mb-4">
													<input
														type="password"
														value={data.password}
														onChange={input}
														name="password"
														id="password"
														className="form-control"
													/>
													<label
														className="form-label"
														for="form2Example22"
													>
														Password
													</label>
												</div>

												<div className="text-center pt-1 mb-5 pb-1">
													<button
														className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
														type="button"
														onClick={handleSubmit}
													>
														Log in
													</button>
													<a
														className="text-muted"
														href="#!"
													>
														Forgot password?
													</a>
												</div>

												{/* <div className="d-flex align-items-center justify-content-center pb-4">
													<p className="mb-0 me-2">
														Don't have an account?
													</p>
													<button
														type="button"
														className="btn btn-outline-danger"
													>
														Create new
													</button>
												</div> */}
											</form>
										</div>
									</div>
									<div className="col-lg-6 d-flex align-items-center gradient-custom-2">
										<div className="text-white px-3 py-4 p-md-5 mx-md-4">
											<h4 className="mb-4">
												We are more than just a company
											</h4>
											<p className="small mb-0">
												Ethereal Softech Pvt Ltd, as a
												prime Mobile & Web App
												Development Company in Dubai &
												India, helps you establish your
												digital presence through our Web
												Development and App development.
												At Ethereal Softech, we use the
												latest technology and updated
												digital solutions to get your
												brand to acquire and sustain a
												remarkable online presence.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Login1;
