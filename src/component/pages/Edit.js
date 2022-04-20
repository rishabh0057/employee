import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const EditUser = () => {
	let navigate = useNavigate();
	const { id } = useParams();
	const [values, setValues] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
	});

	const { name, username, email, phone } = values;
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	useEffect(() => {
		loading();
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.put(`http://localhost:3001/users/${id}`, values);
		navigate("/home");
	};

	const loading = async () => {
		const result = await axios.get(`http://localhost:3001/users/${id}`);
		setValues(result.data);
	};

	return (
		<div className="container">
			<div className="w-75 mx-auto shadow p-5">
				<h2>Edit User</h2>
				<form onSubmit={onSubmit}>
					<div className="mb-3">
						<label for="exampleInputEmail1" className="form-label">
							Name
						</label>
						<input
							type="name"
							className="form-control"
							name="name"
							value={name}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-3">
						<label
							for="exampleInputPassword1"
							className="form-label"
						>
							User Name
						</label>
						<input
							type="name"
							className="form-control"
							name="username"
							value={username}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-3">
						<label
							for="exampleInputPassword1"
							className="form-label"
						>
							Email
						</label>
						<input
							type="email"
							className="form-control"
							name="email"
							value={email}
							onChange={handleInputChange}
						/>
					</div>
					<div className="mb-3">
						<label
							for="exampleInputPassword1"
							className="form-label"
						>
							Number
						</label>
						<input
							type="number"
							className="form-control"
							name="phone"
							value={phone}
							onChange={handleInputChange}
						/>
					</div>
					<button className="btn btn-primary">Update</button>
				</form>
			</div>
		</div>
	);
};

export default EditUser;
